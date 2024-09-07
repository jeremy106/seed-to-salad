
export interface Bed {
  id: number
  name: string
  size: number
  sections : Section[]
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