import { Badge, Button, Card, Group, Stack, Text } from '@mantine/core';
import type { Job } from '../types';
import { colors } from '../theme/theme';
import { useNavigate } from 'react-router-dom';
import { formatSalary, getWorkFormat } from '../utils/jobFormat';

interface JobProps {
  job: Job;
  hideButton?: boolean;
}

export function JobCard({ job, hideButton = false }: JobProps) {
  const navigate = useNavigate();
  const workFormat = getWorkFormat(job.space);
  return (
    <Card w={659} h={hideButton ? 196 : 248} padding={24} radius={12}>
      <Stack gap={16}>
        <Stack gap={8}>
          <Text c={colors.darkPrimary} fw={600} fz={20}>
            {job.name}
          </Text>
          <Group gap={16}>
            <Text fw={400} fz={16}>
              {formatSalary(job.salary)}
            </Text>
            <Text c={colors.gray} fw={400} fz={14}>
              Опыт {job.experience}
            </Text>
          </Group>
        </Stack>

        <Stack gap={8}>
          <Text c={colors.gray} fw={400} fz={14}>
            {job.company_name}
          </Text>
          <Stack gap={4}>
            <Badge
              radius={2}
              size="xs"
              h={16}
              c={workFormat.color}
              bg={workFormat.bg}
            >
              {workFormat.label}
            </Badge>
            <Text fw={400} fz={16}>
              {job.city}
            </Text>
          </Stack>
        </Stack>

        {!hideButton && (
          <Button
            color={colors.black}
            w={172}
            h={36}
            fw={400}
            fz={14}
            onClick={() => navigate(`/vacancies/${job.id}`)}
          >
            Смотреть вакансию
          </Button>
        )}
      </Stack>
    </Card>
  );
}
