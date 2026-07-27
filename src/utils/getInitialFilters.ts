import type { JobsFilters } from '../types';

export function getInitialFilters(): JobsFilters {
  const params = new URLSearchParams(window.location.search);

  const search = params.get('search') || '';
  const city = params.get('city') || 'Все города';
  const page = parseInt(params.get('page') || '1', 10);

  const skillsParam = params.get('skills');
  const skills =
    skillsParam !== null
      ? skillsParam
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : ['JavaScript', 'React', 'Redux', 'Python'];

  return { search, city, skills, page };
}
