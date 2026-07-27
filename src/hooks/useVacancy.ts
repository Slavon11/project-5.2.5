import { useEffect, useState } from 'react';
import type { JobDetail } from '../types';
import { jobsApi } from '../api/jobsApi';

interface JobByIdResponse {
  job: JobDetail;
}

export function useVacancy(id: string | undefined) {
  const [vacancy, setVacancy] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchVacancy = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = (await jobsApi.getJobById(id)) as JobByIdResponse;
        setVacancy(data.job);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки');
      } finally {
        setLoading(false);
      }
    };

    fetchVacancy();
  }, [id]);

  return { vacancy, loading, error };
}
