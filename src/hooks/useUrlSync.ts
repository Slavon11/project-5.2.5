import { useEffect } from 'react';
import { useTypedSelector } from './redux';
import { filterParams } from '../utils/filterParams';
import { useSearchParams } from 'react-router-dom';

export const useUrlSync = () => {
  const filters = useTypedSelector((state) => state.jobs.filters);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = filterParams(filters);
    if (filters.page > 1) {
      params.append('page', filters.page.toString());
    }

    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);
};
