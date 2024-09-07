export type Id = string | number

export interface Bed {
  id: Id
  name: string
  size : number
}

export interface Section {
  id: number
  bed_id: number
  position: number
  plant_id: number
  planted_at: number
  germinated_at: number
  matured_at: number
}