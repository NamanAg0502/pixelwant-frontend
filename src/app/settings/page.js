'use client';

import AppLayout from '@/components/common/AppLayout';
import { useAuth } from '@/context/auth.context';
import { Button } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const Settings = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    console.log('logged out', logout);
    router.push('/auth');
  };

  return (
    <AppLayout label="Settings">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <div className="h-8"></div>
      <div className="">
        <Button
          variant="outline"
          color="red"
          className="outline-none"
          rightSection={<IconLogout size={20} />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </AppLayout>
  );
};

export default Settings;
