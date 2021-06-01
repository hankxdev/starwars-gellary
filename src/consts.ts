import { IPeople, IPlanets, IStarShips } from './intefaces';

export type CardPropTypes = {
  people?: IPeople | IStarShips | IPlanets
  starship?: IPeople | IStarShips | IPlanets
  planet?: IPeople | IStarShips | IPlanets
}

// eslint-disable-next-line no-shadow
export enum ActionType {
  update_people = 'UPDATE_PEOPLE_LIST',
  update_starships = 'UPDATE_STARSHIP_LIST',
  update_planets = 'UPDATE_PLANET_LIST',
  set_people = 'SET_PEOPLE_LIST',
  set_planets = 'SET_PLANET_LIST',
  set_starships = 'SET_STARSHIP_LIST',
}

// eslint-disable-next-line no-shadow
export enum ListTypes {
  people = 'people',
  starships = 'starships',
  planets = 'planets',
}

export type ListType = 'people' | 'starships' | 'planets'
