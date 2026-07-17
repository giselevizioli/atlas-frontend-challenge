export interface ProfessionalCard {
  id: number
  name: string
  profession: string
  professionSlug: string
  avatar: string
  price: number
  phone: string
  email: string
  city: string
  state: string
  description: string
  rating: number
  age: number
  company: string
}

export interface Professional extends ProfessionalCard {
  id: number
  name: string
  profession: string
  professionSlug: string
  avatar: string
  price: number
  phone: string
  email: string
  city: string
  state: string
  description: string
  rating: number
  age: number
  company: string
}

export interface Pagination {
  page: number
  perPage: number
  total: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface ProfessionalsResponse {
  data: ProfessionalCard[]
  pagination: Pagination
}

export interface ProfessionalsFilters {
  search?: string
  professionSlug?: string
  page?: number
  perPage?: number
  sort?: string
  order?: 'asc' | 'desc'
}
export interface Profession {
  slug: string
  name: string
}

export interface City {
  city: string
  state: string
}
