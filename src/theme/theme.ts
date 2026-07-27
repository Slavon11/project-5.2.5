import { createTheme, type MantineColorsTuple, alpha } from '@mantine/core';

const indigo: MantineColorsTuple = [
  '#EDF2FF',
  '#DBE4FF',
  '#BAC8FF',
  '#91A7FF',
  '#748FFC',
  '#5C7CFA',
  '#4C6EF5',
  '#4263EB',
  '#3B5BDB',
  '#364FC7',
];

export const colors = {
  primary: '#4263EB',
  darkPrimary: '#364FC7',
  gray: alpha('#0F0F10', 0.5),
  lightGray: alpha('#0F0F10', 0.3),
  preLight: alpha('#0F0F10', 0.2),
  ultraLight: alpha('#0F0F10', 0.1),
  background: '#F6F6F7',
  white: '#FFFFFF',
  black: '#0F0F10',
} as const;

export const theme = createTheme({
  primaryColor: 'indigo',
  primaryShade: 7,
  colors: {
    indigo,
  },
  black: '#0F0F10',
  white: '#FFFFFF',
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        radius: 'sm',
      },
    },
    TextInput: {
      styles: {
        input: {
          borderColor: colors.preLight,
        },
      },
    },
    Select: {
      styles: {
        input: {
          borderColor: colors.preLight,
        },
      },
    },
  },
});
