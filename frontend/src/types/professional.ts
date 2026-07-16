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
  phone: string
  email: string
  company: string
  description: string
  age: number
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
