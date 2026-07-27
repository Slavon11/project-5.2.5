export interface Job {
  id: number;
  company_name: string;
  name: string;
  city: string;
  salary: string;
  published_at: string;
  short_description: string;
  space: 'office' | 'remote' | 'hybrid';
  skills: string;
  experience: string;
}

export interface JobDetail extends Job {
  description: string;
  about_company: string;
}

export interface JobsPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface JobsFilters {
  search: string;
  city: string;
  skills: string[];
  page: number;
}
