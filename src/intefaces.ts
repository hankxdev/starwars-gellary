/*
   eslint-disable camelcase
 */
export interface IPeople {
  id: number
  birth_year?: string
  eye_color?: string
  films?: Array<string>
  gender?: string
  hair_color?: string
  height?: number
  homeworld?: string
  mass?: number
  name: string
  skin_color?: string
  created?: string
  edited?: string
  species?: Array<string>
  starships?: Array<string>
  url: string
  vehicles?: Array<string>
  [key: string]: any;
}

export interface IPlanets {
  id: number
  climate?: string
  created?: string
  diameter?: number
  edited?: string
  films?: Array<string>
  gravity?: number
  name?: string
  orbital_period?: number
  population?: number
  residents?: Array<string>
  rotation_period?: number
  surface_water?: number
  terrain?: string
  url: string
  [key: string]: any;
}

export interface IStarShips {
  id: number
  MGLT?: string
  cargo_capacity?: number
  consumables?: string
  cost_in_credits?: number
  created?: string
  crew?: number
  edited?: string
  hyperdrive_rating?: number
  length?: number
  manufacturer?: string
  max_atmosphering_speed?: string | number
  model?: string
  name?: string
  passengers?: number
  films?: Array<string>
  pilots?: []
  starship_class?: string
  url: string
  [key: string]: any;
}

export interface IListAPIResults {
  next: string | null
  count?: number,
  previous?: string | null,
  results:Array<any>
}
