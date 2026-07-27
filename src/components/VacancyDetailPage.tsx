import { Card, Loader, Stack, Text, Title } from '@mantine/core';
import { JobCard } from './JobCard';
import { useParams } from 'react-router-dom';
import { useVacancy } from '../hooks/useVacancy';
import { colors } from '../theme/theme';

export function VacancyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { vacancy, loading, error } = useVacancy(id);

  if (loading) {
    return (
      <Stack align="center" justify="center" h={248}>
        <Loader />
      </Stack>
    );
  }

  if (error || !vacancy) {
    return (
      <Stack justify="center" ta="center" h={240}>
        <Text c={colors.gray}>{error || 'Вакансия не найдена'}</Text>
      </Stack>
    );
  }

  return (
    <Stack align="center" justify="center" gap={24} pt={24}>
      <JobCard job={vacancy} hideButton />

      <Card w={659} p={24} radius={12}>
        <Stack gap={12}>
          <Title order={3} fw={600} fz={20}>
            Компания
          </Title>
          <Text fw={400} fz={16}>
            {vacancy.about_company}
          </Text>
        </Stack>

        <Stack gap={8} mt={16}>
          <Title order={3} fw={600} fz={16}>
            О вакансии:
          </Title>
          <Text fw={400} fz={16}>
            {vacancy.description}
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
}
