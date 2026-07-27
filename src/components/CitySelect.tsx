import { Box, Select } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { useTypedDispatch, useTypedSelector } from '../hooks/redux';
import { setCity } from '../reducers/jobsSlice';
import { colors } from '../theme/theme';

export function CitySelect() {
  const dispatch = useTypedDispatch();
  const city = useTypedSelector((state) => state.jobs.filters.city);

  return (
    <Box w={317} h={84} bg={colors.white} style={{ borderRadius: '12px' }}>
      <Select
        leftSection={<IconMapPin size={16} color={colors.lightGray} />}
        data={['Все города', 'Москва', 'Санкт-Петербург']}
        value={city}
        onChange={(val) => dispatch(setCity(val || 'Все города'))}
        p={24}
        radius={4}
        styles={{
          input: {
            color: colors.lightGray,
          },
          dropdown: {
            marginTop: 0,
            borderColor: colors.white,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          },
        }}
      />
    </Box>
  );
}
