import React from 'react';

function Headings() {
  return (
    <div className='border p-3'>
      <div className='flex flex-col md:flex-row md:items-center md:space-x-5'>
        <h1 className='font-bold text-xl md:text-2xl mb-2 md:mb-0'>Email Signature</h1>
        <p className='text-gray-700 text-sm md:text-base'>
          Edit and choose signatures that will be automatically added to your emails.
        </p>
      </div>
    </div>
  );
}

export default Headings;
