import { Group, Stack, Text, TextInput, ActionIcon, Pill } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { addSkill, removeSkill } from '../../reducers/jobsSlice';
import { useState } from 'react';
import styles from './SkillsInput.module.css';
import { colors } from '../../theme/theme';

export function SkillsInput() {
  const dispatch = useTypedDispatch();
  const skills = useTypedSelector((state) => state.jobs.filters.skills);
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (value.trim()) {
      dispatch(addSkill(value.trim()));
      setValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <Stack
      w={317}
      gap={12}
      p={24}
      bg={colors.white}
      style={{ borderRadius: '12px' }}
    >
      <Text fw={600} fz={14} c="#212529">
        Ключевые навыки
      </Text>

      <Group gap={8}>
        <TextInput
          placeholder="Навык"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          fw={400}
          fz={12}
          w={227}
          size="xs"
        />

        <ActionIcon
          onClick={handleAdd}
          disabled={!value.trim()}
          w={34}
          h={30}
          className={styles.skillsInput}
        >
          <IconPlus />
        </ActionIcon>
      </Group>

      <Group gap={6}>
        {skills.map((skill) => (
          <Pill
            key={skill}
            withRemoveButton
            onRemove={() => dispatch(removeSkill(skill))}
            bg={colors.background}
            h={24}
            pl={12}
            pr={6}
            className={styles.pill}
          >
            {skill}
          </Pill>
        ))}
      </Group>
    </Stack>
  );
}
