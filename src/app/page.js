'use client';

import AppLayout from '@/components/common/AppLayout';
import Login from './auth/page';
import { useAuth } from '@/context/auth.context';

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <AppLayout label="Dashboard">
          <p className="font-bold">Welcome, User!</p>
        </AppLayout> // Replace with your greeting message
      ) : (
        <Login /> // Replace with your login prompt
      )}
    </div>
  );
}
