import {
  createContext, Dispatch,
} from 'react';
import { IPeople, IPlanets, IStarShips } from './intefaces';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
      type: Key;
    }
    : {
      type: Key;
      payload: M[Key];
    }
};

export type AppState = {
  peopleList: Array<IPeople>
  planetsList: Array<IPlanets>
  starShipList: Array<IStarShips>
  isLoading: boolean
}

type ActionPayload = {
  'UPDATE_PEOPLE_LIST': Array<IPeople>
  'UPDATE_PLANET_LIST': Array<IPlanets>
  'UPDATE_STARSHIP_LIST': Array<IStarShips>
  'SET_PEOPLE_LIST': Array<IPeople>
  'SET_PLANET_LIST': Array<IPlanets>
  'SET_STARSHIP_LIST': Array<IStarShips>
  'SET_LOADING': boolean
}

type AppActions = ActionMap<ActionPayload> [keyof ActionMap<ActionPayload>]

export const initState: AppState = {
  peopleList: [],
  planetsList: [],
  starShipList: [],
  isLoading: false
}

export const reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case 'UPDATE_PEOPLE_LIST':
      return { ...state, peopleList: [...state.peopleList, ...action.payload] }
    case 'UPDATE_PLANET_LIST':
      return { ...state, planetsList: [...state.planetsList, ...action.payload] }
    case 'UPDATE_STARSHIP_LIST':
      return { ...state, starShipList: [...state.starShipList, ...action.payload] }
    case 'SET_PEOPLE_LIST':
      return { ...state, peopleList: action.payload }
    case 'SET_PLANET_LIST':
      return { ...state, planetsList: action.payload }
    case 'SET_STARSHIP_LIST':
      return { ...state, starShipList: action.payload }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}

export const AppContext = createContext<{
  state: AppState,
  dispatch: Dispatch<AppActions>
}>({
  state: initState,
  dispatch: () => undefined
})
