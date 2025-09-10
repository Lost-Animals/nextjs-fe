export enum AnimalStatusEnum {
  LOST = "lost",
  FOUND = "found",
}

export interface BaseAnimal {
  name: string
  microchip?: string
  passport_id?: string
  status: AnimalStatusEnum
}

export interface AnimalData extends BaseAnimal {}

export interface Animal extends BaseAnimal {
  id: string
  image?: string
  description?: string
  location?: string
  date_lost?: string
  contact_info?: string
}
