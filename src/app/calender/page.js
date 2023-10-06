'use client';

import CreateMeeting from '@/components/Calender/CreateMeeting';
import AppLayout from '@/components/common/AppLayout';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';

const Events = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppLayout label="Events">
      <div className="flex justify-between item">
        <h1 className="text-3xl font-semibold">Events</h1>
        <Button onClick={open} leftSection={<IconPlus />}>
          Create new meeting
        </Button>
      </div>
      <CreateMeeting
        opened={opened}
        close={close}
        title="Create New Meeting"
        centered={true}
      />
    </AppLayout>
  );
};

export default Events;
