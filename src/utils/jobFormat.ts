import { colors } from '../theme/theme';

export function formatSalary(salary: string) {
  const num = Number(salary);
  if (Number.isNaN(num)) return salary;
  return `${num.toLocaleString('ru-RU')} ₽`;
}

export function getWorkFormat(space: 'office' | 'remote' | 'hybrid') {
  const map = {
    office: {
      label: 'ОФИС',
      color: colors.gray,
      bg: colors.ultraLight,
    },
    remote: {
      label: 'МОЖНО УДАЛЁННО',
      color: colors.white,
      bg: colors.primary,
    },
    hybrid: {
      label: 'ГИБРИД',
      color: colors.white,
      bg: colors.black,
    },
  };

  return (
    map[space] || { label: space, color: colors.gray, bg: colors.ultraLight }
  );
}
