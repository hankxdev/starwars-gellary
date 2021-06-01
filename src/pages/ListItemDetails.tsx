import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getListItem } from '../services';
import { IPeople, IPlanets, IStarShips } from '../intefaces';
import { ItemHeader } from '../styles/CommonStyles'
import SimpleList from '../components/SimpleList'
import { AppContext } from '../store';
import { ListTypes } from '../consts';
import { slashToCamel } from '../utils';

interface ParamTypes {
  id:string
  name: string
}

interface PropType {
  itemName: string
}

const ListItemDetails = ({ itemName }:PropType): JSX.Element => {
  const { id, name } = useParams<ParamTypes>()
  const [item, setItem] = useState<IPeople | IPlanets | IStarShips | undefined>(undefined)
  const { state, dispatch } = useContext(AppContext)

  const getStateByItemName = ():Array<IPeople | IStarShips | IPlanets> => {
    switch (itemName) {
      case ListTypes.people:
        return state.peopleList
      case ListTypes.starships:
        return state.starShipList
      case ListTypes.planets:
        return state.planetsList
      default:
        return []
    }
  }

  useEffect(() => {
    const list = getStateByItemName()
    if (list.length > 1) {
      setItem(list.find((p) => p.name === name))
    } else {
      getListItem(Number(id), itemName).then((itm) => {
        setItem(itm === null ? undefined : itm)
      }).catch(() => {
        setItem(undefined)
      })
    }
  }, [])

  return (
    <div className="mt-4">
      <ul className="list-group list-unstyled col-12">
        {
          item ? Object.entries(item).map(([key, value]) => (
            <li className="list-group-item" key={key}>
              <ItemHeader>
                <strong>
                  {slashToCamel(key)}
                  :
                </strong>
              </ItemHeader>
              {Array.isArray(value) ? <SimpleList list={value} /> : value}
            </li>
          )) : <div className="text-danger">May the 4th be with you</div>
        }
      </ul>
    </div>
  )
}

export default ListItemDetails
