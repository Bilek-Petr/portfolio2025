import React, { useState, useEffect } from 'react';
import { ArrowUpRight, AlertCircle } from 'lucide-react';
import styles from './DownloadCTA.module.scss';

interface DownloadCTAProps {
  label: string;
  cvPath: string;
}

export default function DownloadCTA({
  label = 'Download CV',
  cvPath,
}: DownloadCTAProps) {
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset success state after animation
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 2000); // Match this with animation duration
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleDownload = async () => {
    try {
      setError(null);
      const response = await fetch(cvPath);

      if (!response.ok) {
        throw new Error('Failed to download CV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV_Petr_Bilek.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setIsSuccess(true);
    } catch (err) {
      setError('Download failed.');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleDownload}
        aria-label="Download CV"
        className="flex items-center gap-2 font-medium underline transition-all duration-300 hover:text-accent-dark group text-accent hover:scale-105"
        disabled={!!error || isSuccess}
      >
        {label}
        <span className="relative inline-block overflow-hidden bg-gradient-custom">
          <ArrowUpRight
            className={`h-4 w-4 text-white sm:h-5 sm:w-5 ${isSuccess && styles.flyAnimation}`}
          />
        </span>
      </button>

      {error && (
        <div className="absolute left-0 flex items-center gap-2 mt-2 text-sm text-red-500 top-full">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
