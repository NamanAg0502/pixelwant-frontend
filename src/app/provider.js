'use client';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { AuthProvider } from '@/context/auth.context';

export const AppProvider = ({ childern }) => {
  return (
    <>
      <MantineProvider withCssVariables={true}>
        <AuthProvider>{childern}</AuthProvider>
      </MantineProvider>
    </>
  );
};
