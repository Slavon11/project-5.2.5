import ky from 'ky';
import type { JobsFilters } from '../types';
import { filterParams } from '../utils/filterParams';

export const jobsApi = {
  getJobs: async (filters: JobsFilters) => {
    const params = filterParams(filters);
    params.append('page', filters.page.toString());

    const data = await ky
      .get('https://kata-jobs.onrender.com/api/jobs', { searchParams: params })
      .json();
    return data;
  },

  getJobById: async (id: string | number) => {
    const data = await ky
      .get(`https://kata-jobs.onrender.com/api/jobs/${id}`)
      .json();
    return data;
  },
};
