'use client';

import { useRef } from 'react';
import { Text, Group, Button, rem, useMantineTheme } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';

export default function UploadArea({ files, setFiles }) {
  const theme = useMantineTheme();
  const openRef = useRef(null);

  return (
    <div className="relative mb-8">
      <Dropzone
        openRef={openRef}
        onDrop={(file) => {
          setFiles([...files, file]);
          console.log('accepted files', file);
        }}
        onReject={(files) => console.log('rejected files', files)}
        className="border-2 border-neutral-400 border-dotted pb-12 rounded-2xl"
        radius="md"
        accept={[MIME_TYPES.pdf, MIME_TYPES.png, MIME_TYPES.csv]}
        maxSize={3 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }} className="py-10">
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                style={{ width: rem(50), height: rem(50) }}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Files less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Upload resume</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Drag&apos;n&apos;drop files here to upload. We can accept files that
            are less than 3mb in size.
          </Text>
        </div>
      </Dropzone>

      <Button
        className="absolute left-[calc(45%)] bottom-5"
        size="md"
        radius="xl"
        onClick={() => openRef.current?.()}
      >
        Select files
      </Button>
    </div>
  );
}
