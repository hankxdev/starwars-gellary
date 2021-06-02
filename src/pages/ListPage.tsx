import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import useGetList from '../hooks/useGetList'
import { ListTypes } from '../consts';
import Card from '../components/Card'
import { IPeople, IPlanets, IStarShips } from '../intefaces';
import { AppContext, AppState } from '../store';

type PropTypes = {
  name: string
}

const FullHeightList = styled.div`
  min-height: calc(100vh - 180px); // the full height minus the header, search bar and load button
`

const LoadButton = styled.button`
  background-color: #f0f0f0;
`

// eslint-disable-next-line no-shadow
enum DataListType {
  people = 'peopleList',
  starships = 'starShipList',
  planets = 'planetsList'
}

const ListPage = ({ name }: PropTypes): JSX.Element => {
  const [loadMore, setLoadMore] = useState(false)
  const { list, nextPage } = useGetList(ListTypes[name as keyof typeof ListTypes], loadMore)
  const [query, setQuery] = useState('')
  const [filteredList, setFilteredList] = useState<Array<IPeople | IStarShips | IPlanets>>([])
  const { state, dispatch } = useContext(AppContext)
  const listName = name as keyof typeof DataListType

  useEffect(() => {
    const originalList = state[DataListType[listName]]
    if (!query) {
      setFilteredList(originalList)
    }
    // @ts-ignore
    const filtered = originalList.filter(
      (item: { [x: string]: string | string[]; }) => Object.keys(item).some((key) => item[key].includes(query))
    )
    setFilteredList(filtered)
  }, [query, state[DataListType[listName]]])

  // reset the query while switch page
  useEffect(() => {
    setQuery('')
  }, [name])

  const { pathName, displayItems } = getConfigForPage(name)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value.trim()
    setQuery(q)
  }

  const handleLoadMore = () => {
    if (nextPage < 1) {
      // is the last page
      // TODO better alert message
      alert('There is nothing to fetch')
      return
    }
    setLoadMore(!loadMore)
  }

  return (
    <div className="mt-2">
      <input placeholder="press enter to search" className="form-control" value={query} onChange={handleSearch} />
      {
        filteredList.length > 0 ? (
          <FullHeightList>
            <div className="row d-flex flex-wrap">
              {
                filteredList.map((item) => (
                  <div className="col-4" key={item.name}>
                    <Card pathName={pathName} displayItems={displayItems} itemData={item} />
                  </div>
                ))
              }
            </div>
          </FullHeightList>
        ) : <div className={`alert-danger alert my-4 ${state.isLoading ? 'd-none' : ''}`}>Nothing here...</div>
      }
      <LoadButton
        className={`btn my-4 w-100 ${state.isLoading ? 'd-none' : ''}`}
        type="button"
        onClick={handleLoadMore}
      >
        Load more
      </LoadButton>
    </div>
  )
}

type PageConfig = {
  pathName: string,
  displayItems: Array<keyof (IPeople | IStarShips | IPlanets)>,
}

const getConfigForPage = (name: string): PageConfig => {
  // default to people
  const pathName = 'people'
  const displayItems = ['gender', 'mass', 'url', 'height'] as Array<keyof (IPlanets | IPeople | IStarShips)>
  switch (name) {
    case ListTypes.planets:
      return {
        pathName: ListTypes.planets,
        displayItems: ['climate', 'diameter', 'population', 'url'] as Array<keyof (IPlanets | IPeople | IStarShips)>
      }
    case ListTypes.starships:
      return {
        pathName: ListTypes.starships,
        displayItems: ['MGLT', 'cargo_capacity', 'cost_in_credits', 'url'] as Array<keyof (IPlanets | IPeople | IStarShips)>
      }
    case ListTypes.people:
    default:
      return {
        pathName,
        displayItems
      }
  }
}

export default ListPage
