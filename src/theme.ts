import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Rubik, sans-serif',
  },
  colors: {
    'base-dark-green-1': '#142E23',
    'base-dark-green-2': '#285045',
    'base-gray': '#ADC3AB',
    'base-peach': '#CD9761',
    'base-peach-btn': '#CD955D',
    'base-gold': '#D7A163',
    'base-dark-green': '#234034',
    'base-light-green': '#395348',
    'base-light-green-2': '#375147',
  },
  fontSizes: {
    'xs-11': '0.6875rem', // 11px
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },
  styles: {
    global: {},
  },
});

export default theme;
