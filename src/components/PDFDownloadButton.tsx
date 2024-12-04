import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';
import { ResumePDF } from '../utils/generatePDF';

interface FormData {
  personal: {
    fullName: string;
    email: string;
    phone: string;
    website?: string;
    github?: string;
    linkedin?: string;
  };
  experience?: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  education?: Array<{
    degree: string;
    school: string;
    year: string;
    description: string;
  }>;
  skills?: Array<{
    name: string;
    level: string;
  }>;
}

interface PDFDownloadButtonProps {
  formData: FormData;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ formData }) => {
  return (
    <PDFDownloadLink
      document={<ResumePDF formData={formData} />}
      fileName={`${formData.personal.fullName || 'resume'}.pdf`}
      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
    >
      {({ loading }) => (
        <>
          <Download className="w-4 h-4 mr-2" />
          {loading ? 'Generating PDF...' : 'Download PDF'}
        </>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;