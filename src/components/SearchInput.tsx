import { useState } from 'react';
import { Button, TextInput, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useTypedDispatch, useTypedSelector } from '../hooks/redux';
import { setSearch } from '../reducers/jobsSlice';
import { colors } from '../theme/theme';

export function SearchInput() {
  const dispatch = useTypedDispatch();
  const currentSearch = useTypedSelector((state) => state.jobs.filters.search);
  const [value, setValue] = useState(currentSearch);

  const handleSubmit = () => {
    dispatch(setSearch(value.trim()));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Group gap={12}>
      <TextInput
        placeholder="Должность или название компании"
        leftSection={<IconSearch size={16} color={colors.lightGray} />}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        w={403}
        size="md"
        fw={400}
        styles={{
          input: {
            backgroundColor: colors.background,
          },
        }}
      />
      <Button onClick={handleSubmit} fz={16} fw={400} w={93} size="md">
        Найти
      </Button>
    </Group>
  );
}
