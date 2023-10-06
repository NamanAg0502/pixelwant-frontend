'use client';

import { useAuth } from '@/context/auth.context';
import { Divider, Input, Modal, Select, Text, Textarea } from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AttendeeTable from './AttendeeTable';
const data = [
  {
    id: 1,
    title: 'Meeting Name: ',
    placeholder: 'Set Name',
    type: 'text',
    required: true,
  },
  {
    id: 2,
    title: 'Meeting Date: ',
    placeholder: 'Set Date',
    type: 'date',
    required: true,
  },
  {
    id: 3,
    title: 'Meeting Time: ',
    placeholder: 'Set Time',
    type: 'time',
    required: true,
  },
  {
    id: 4,
    title: 'Meeting Type: ',
    placeholder: 'Set Type',
    type: 'text',
    required: true,
  },
];

const CreateMeeting = ({ opened, close, title, centered = true }) => {
  const [attendes, setAttendees] = useState([]);
  const form = useForm({
    initialValues: {
      title: '',
      date: '',
      time: '',
      description: '',
      attendees: [],
    },
  });

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const response = await axios.get('http://localhost:4000/auth/all');
        setAttendees(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchAllUsers();
  }, []);

  console.log(attendes);

  const renderInputField = (dataItem) => {
    switch (dataItem.type) {
      case 'text':
        return (
          <Input
            value={form.values.title}
            variant="filled"
            className="outline-none"
            required={dataItem.required}
            w="300"
            onChange={(e) => form.setValues('title', e.target.value)}
            p="xs"
            placeholder={dataItem.placeholder}
          />
        );

      case 'date':
        return (
          <DateInput
            value={form.values.date}
            w="300"
            valueFormat="MM/DD/YYYY"
            clearable
            variant="filled"
            onChange={(date) => form.setValues('date', date)}
            p="xs"
            required={dataItem.required}
            placeholder={dataItem.placeholder}
          />
        );

      case 'time':
        return (
          <TimeInput
            w="300"
            variant="filled"
            value={form.values.time}
            onChange={(time) => form.setValues('time', time)}
            p="xs"
            required={dataItem.required}
            placeholder={dataItem.placeholder}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <Modal
        closeOnClickOutside
        opened={opened}
        withCloseButton={false}
        size="lg"
        onClose={close}
        centered={centered}
        overlayProps={{
          blur: 3,
          backgroundOpacity: 0.55,
        }}
      >
        <div>
          <h1 className="text-xl font-medium mb-4">{title}</h1>
          <form
            onSubmit={form.onSubmit((values) => console.log(values))}
            className=""
          >
            {data.map((dataItem) => (
              <div key={dataItem.id}>
                <Input.Wrapper
                  label={dataItem.title}
                  withAsterisk
                  className="grid grid-cols-3 items-center"
                >
                  {renderInputField(dataItem)}
                </Input.Wrapper>
              </div>
            ))}
            <Divider />
            <Textarea
              label="Description"
              placeholder="Meeting Description"
              autosize
              multiline={true}
              minRows={4}
              py={16}
            />
            <Divider />
            <div>
              <div className="flex justify-between items-center my-5">
                <Text fw={600} size="md">
                  Attendes
                </Text>
                <Select
                  placeholder="Search Attendees"
                  searchable
                  size="xs"
                  data={attendes.map((attendee) => ({
                    label: attendee.name,
                    value: attendee._id,
                  }))}
                  leftSection={<IconSearch size={16} />}
                  value={form.values.attendees}
                  maxDropdownHeight={200}
                  onChange={(value) => form.setValues({ attendees: value })}
                  multiple
                />
              </div>
              <AttendeeTable attendees={attendes} />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateMeeting;
