import React from 'react';

const DownloadCVButton = () => {
  const handleDownload = () => {
    // URL to the CV
    const cvUrl = './public/Pdf/Patel_Akshar_CV.pdf';

    // Open the CV in a new tab to view
    window.open(cvUrl, '_blank');

    // Create an invisible link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'public/Pdf/Patel_Akshar_CV.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div>
      <button-
        onClick={handleDownload}
       
      >
        <span >
          Download CV
        </span>
      </button->
    </div>
  );
};

export default DownloadCVButton;
