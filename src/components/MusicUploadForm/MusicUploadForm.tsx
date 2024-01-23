import React, { useState } from "react";

interface MusicUploadFormProps {
  onFileChange: (file: File | null) => void;
}

const MusicUploadForm: React.FC<MusicUploadFormProps> = ({ onFileChange }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
      onFileChange(selectedFile);
    } else {
      setFile(null);
      onFileChange(null);
    }
  };

  return (
    <form>
      <input type="file" accept=".mp3,.wav" onChange={handleFileInputChange} />
      <button type="button" disabled={!file}>
        Upload
      </button>
    </form>
  );
};

export default MusicUploadForm;
