import { ActionIcon, Badge, Button, Table } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

const AttendeeTable = ({
  attendees,
  addedAttendees,
  onAddAttendee,
  onDeleteAttendee,
}) => {
  return (
    <Table className="table" verticalSpacing="sm">
      <Table.Tbody className="items-center">
        {attendees.map((attendee) => (
          <Table.Tr key={attendee._id}>
            <Table.Td>
              <div className="flex flex-col items-start">
                <span className="capitalize font-medium">{attendee.name}</span>
                <span className="text-xs font-light text-neutral-600">
                  {attendee.email}
                </span>
              </div>
            </Table.Td>
            <Table.Td>
              <Badge
                color={attendee.role === 'user' ? 'blue' : 'grape'}
                variant="light"
              >
                {attendee.role}
              </Badge>
            </Table.Td>
            <Table.Td>
              {!attendees.includes(attendee._id) ? (
                <ActionIcon
                  size="xs"
                  variant="light"
                  color="blue"
                  onClick={() => onAddAttendee(attendee._id)}
                >
                  <IconPlus />
                </ActionIcon>
              ) : (
                <ActionIcon
                  size="xs"
                  variant="light"
                  color="red"
                  onClick={() => onDeleteAttendee(attendee._id)}
                >
                  <IconTrash />
                </ActionIcon>
              )}
            </Table.Td>
            {/* <Table.Td>
              <ActionIcon
                size="xs"
                variant="light"
                color="red"
                onClick={() => onDeleteAttendee(attendee._id)}
              >
                <IconTrash />
              </ActionIcon>
            </Table.Td> */}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default AttendeeTable;
