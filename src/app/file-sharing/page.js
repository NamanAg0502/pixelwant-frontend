'use client';

import FilesList from '@/components/FileSharing/FilesList';
import UploadArea from '@/components/FileSharing/UploadArea';
import AppLayout from '@/components/common/AppLayout';
import { useState } from 'react';

const FileSharing = () => {
  const [files, setFiles] = useState([]);
  return (
    <AppLayout label="File Sharing">
      <h1 className="text-3xl font-semibold mb-8">File Sharing</h1>
      <UploadArea setFiles={setFiles} files={files} />
      <FilesList files={files} />
    </AppLayout>
  );
};

export default FileSharing;
