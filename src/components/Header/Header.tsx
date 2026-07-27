import { Group, Image, Text, Anchor } from '@mantine/core';
import logo from '../../assets/logo.svg';
import userCircle from '../../assets/user-circle.svg';
import styles from './Header.module.css';
import { colors } from '../../theme/theme';

export function Header() {
  return (
    <header className={styles.header}>
      <Group justify="space-between" align="center" h={60} px={20}>
        <Group gap={10} w={116}>
          <Image src={logo} w={30} />
          <Text fw={600} fz={16}>
            .FrontEnd
          </Text>
        </Group>

        <Group gap={24} align="center">
          <Group gap={8}>
            <Anchor
              href="/"
              fw={500}
              fz={14}
              c={colors.black}
              style={{ textDecoration: 'none' }}
            >
              Вакансии FE
            </Anchor>
            <div className={styles.point} />
          </Group>

          <Group gap={4}>
            <Image src={userCircle} w={24} />
            <Text fw={500} fz={14} c={colors.gray}>
              Обо мне
            </Text>
          </Group>
        </Group>
        <Group w={116} />
      </Group>
    </header>
  );
}
