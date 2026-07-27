import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { store } from './store/store';
import '@mantine/core/styles.css';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { theme } from './theme/theme.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <BrowserRouter basename="/project-5.2.5">
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </StrictMode>,
);
