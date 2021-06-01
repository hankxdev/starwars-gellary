import {
  useContext, useEffect, useState, useRef
} from 'react';
import { AppContext } from '../store';
import { API, getListData } from '../services';
import { IPeople, IPlanets, IStarShips } from '../intefaces';
import { ActionType, ListType, ListTypes } from '../consts';
import { getLastNumFromURL } from '../utils';
import usePrevious from './usePrevious'

const useGetList = (listType: ListType, loadMore: boolean): { list: Array<IPeople | IStarShips | IPlanets>, nextPage: number } => {
  const { state, dispatch } = useContext(AppContext)
  const [list, setList] = useState<Array<IPeople | IStarShips | IPlanets>>([])
  const [nextPage, setNextPage] = useState(1)

  const prevPageType = usePrevious(listType)

  const toggleLoading = (value: boolean) => {
    dispatch({
      type: 'SET_LOADING',
      payload: value
    })
  }

  const getPageNumFromURL = (url: string | null): number => {
    if (!url) {
      return 0
    }
    return Number(getLastNumFromURL(url))
  }

  useEffect(() => {
    setNextPage(1)
  }, [listType])

  useEffect(() => {
    toggleLoading(true)
    const pageChanged = prevPageType !== listType
    const actionName = `${pageChanged ? 'set' : 'update'}_${listType}` as keyof typeof ActionType
    const url = API.getListURL(pageChanged ? 1 : nextPage, listType)
    getListData(url).then((data) => {
      const { results, next } = data
      setNextPage(getPageNumFromURL(next))
      setList(results)
      dispatch({
        type: ActionType[actionName],
        payload: data.results
      })
      toggleLoading(false)
    }).catch(() => {
      // TODO better error message showing
      alert('Error when fetching data')
      setList([])
    })
  }, [listType, loadMore])

  return {
    list,
    nextPage
  }
}

export default useGetList
