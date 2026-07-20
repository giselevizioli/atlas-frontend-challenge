export interface Professional {
  id: number;
  name: string;
  profession: string;
  professionSlug: string;
  avatar: string;
  price: number;
  phone: string;
  email: string;
  city: string;
  state: string;
  description: string;
  rating: number;
  age: number;
  company: string;
}

export interface Pagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ProfessionalsResponse {
  data: Professional[];
  pagination: Pagination;
}

export type SortField = 'price' | 'rating';
export type SortOrder = 'asc' | 'desc';

export interface ProfessionalsFilters {
  search?: string;
  professionSlug?: string;
  citySlug?: string;
  page?: string | number;
  perPage?: string | number;
  sort?: SortField;
  order?: SortOrder;
}

export interface Profession {
  slug: string;
  name: string;
}

export interface City {
  city: string;
  state: string;
}

export interface FiltersState {
  pagination: Pagination;
  search: string;
  sort: SortField;
  order: SortOrder;
  professions: Profession[];
  selectedProfessions: string[];
  cities: City[];
  selectedCities: string[];
  openedModal: string;
}

export interface SortFieldObject {
  sort: string;
  order: string;
  name: string;
}
