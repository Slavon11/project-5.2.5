import { Group, Text, Stack, Loader, Pagination } from '@mantine/core';
import { SearchInput } from './SearchInput';
import { SkillsInput } from './SkillsInput/SkillsInput';
import { CitySelect } from './CitySelect';
import { JobCard } from './JobCard';
import { useTypedDispatch, useTypedSelector } from '../hooks/redux';
import { colors } from '../theme/theme';
import { useEffect } from 'react';
import { fetchJobs, setPage } from '../reducers/jobsSlice';
import { useUrlSync } from '../hooks/useUrlSync';

export function JobList() {
  useUrlSync();
  const dispatch = useTypedDispatch();
  const { jobs, loading, error, filters, pagination } = useTypedSelector(
    (state) => state.jobs,
  );

  useEffect(() => {
    dispatch(fetchJobs(filters));
  }, [filters, dispatch]);

  return (
    <div>
      <Group
        justify="center"
        align="center"
        py={24}
        gap={126}
        style={{ boxShadow: `0 0 1px 0 ${colors.preLight}` }}
      >
        <Stack gap={4}>
          <Text fw={700} fz={26}>
            Список вакансий
          </Text>
          <Text c={colors.gray} fw={500} fz={20}>
            по профессии Frontend-разработчик
          </Text>
        </Stack>

        <SearchInput />
      </Group>

      <Group gap={24} pt={24} justify="center" align="flex-start">
        <Stack gap={10}>
          <SkillsInput />
          <CitySelect />
        </Stack>

        <Stack gap={16} w={659}>
          {loading ? (
            <Stack align="center" justify="center" h={248}>
              <Loader />
            </Stack>
          ) : error ? (
            <Stack justify="center" ta="center" h={240}>
              <Text c={colors.gray}>{error}</Text>
            </Stack>
          ) : jobs.length === 0 ? (
            <Text c={colors.gray} ta="center" fz={18}>
              Вакансии не найдены
            </Text>
          ) : (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          )}
          {pagination && (
            <Group justify="center">
              <Pagination
                value={pagination.currentPage}
                onChange={(page) => dispatch(setPage(page))}
                total={pagination.totalPages}
                siblings={1}
                radius="xs"
                size="md"
                mt={24}
                mb={84}
                withEdges
                withControls
              />
            </Group>
          )}
        </Stack>
      </Group>
    </div>
  );
}
