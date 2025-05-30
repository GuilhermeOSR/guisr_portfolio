// components/DownloadButton.tsx

'use client';
import { MdFileDownload } from "react-icons/md"

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Guilherme-CV.pdf';
    link.setAttribute('download', 'Guilherme-CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
   <button onClick={handleDownload} className="btn btn-lg btn-tertiary mb-16">
        <div className="flex items-center gap-3">
            <span>Baixar CV.</span>
            <MdFileDownload className="text-xl" />
        </div>
    </button>
  );
};

export default DownloadButton;
