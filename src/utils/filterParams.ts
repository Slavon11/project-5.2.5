import type { JobsFilters } from '../types';

export const filterParams = (filters: JobsFilters): URLSearchParams => {
  const params = new URLSearchParams();

  if (filters.search?.trim()) {
    params.append('search', filters.search.trim());
  }

  if (filters.city && filters.city !== 'Все города') {
    params.append('city', filters.city);
  }

  params.append('skills', filters.skills.join(','));

  return params;
};
