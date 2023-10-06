import { ActionIcon, Table } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { IconDownload } from '@tabler/icons-react';

const FilesList = ({ files }) => {
  const rows = files.map((file, index) => {
    return (
      <Table.Tr key={index}>
        <Table.Td>{file[0].name}</Table.Td>
        <Table.Td>{file[0].type}</Table.Td>
        <Table.Td>
          <ActionIcon variant="transparent" aria-label="download">
            <IconDownload stroke={1.5} />
          </ActionIcon>
        </Table.Td>
        <Table.Td>
          <ActionIcon variant="transparent" aria-label="delete">
            <IconTrash stroke={1.5} color="red" />
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    );
  });
  return (
    <Table highlightOnHover striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Download</Table.Th>
          <Table.Th>Delete</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default FilesList;
