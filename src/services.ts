import axios, { AxiosError } from 'axios';
import {
  IPeople, IPlanets, IStarShips, IListAPIResults
} from './intefaces';

type ServerError = {
  code: string,
  description: string
}

const baseURL = 'https://swapi.dev/api'
export const API = {
  getPeople: (id: number): string => `${baseURL}/people/${id}/`,
  getPlanets: (id: number): string => `${baseURL}/planets/${id}/`,
  getListURL: (page = 1, path:string):string => `${baseURL}/${path}?page=${page}`,
  getStarShips: (id: number): string => `${baseURL}/starships/${id}/`,
}

export const apiClient = axios.create({
  baseURL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  }
})

export const apiGet = async (url: string): Promise<any> => {
  try {
    const resp = await apiClient.get(url);
    return resp.data
  } catch (e) {
    if (e && e.response) {
      const axiosError = e as AxiosError<ServerError>
      return axiosError.response?.data
    }
    return null
  }
}

export const getListData = async (url:string):Promise<IListAPIResults> => {
  const data: IListAPIResults = await apiGet(url)
  if (!data) {
    return data
  }
  return { results: data.results, next: data.next }
}

export const getPeople = async (id: number): Promise<IPeople> => apiGet(API.getPeople(id))
export const getPlanets = async (id: number): Promise<IPlanets> => apiGet(API.getPlanets(id))
export const getStarShips = async (id: number): Promise<IStarShips> => apiGet(API.getStarShips(id))

export const getListItem = async (id:number, itemName:string):
  Promise<IPeople| IPlanets |IStarShips |null> => {
  switch (itemName) {
    case 'people':
      return getPeople(id)
    case 'starships':
      return getStarShips(id)
    case 'planets':
      return getPeople(id)
    default:
      return null
  }
}
