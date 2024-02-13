import React from 'react';

function From() {
  return (
    <div className='w-full h-auto py-3'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className="relative inline-block mb-2 md:mb-0 md:mr-2">
          <select
            id="signatureDropdown"
            name="signatureDropdown"
            className="block appearance-none w-full md:w-96 bg-white border border-[#5707E4] text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="option1">Signature 1</option>
            <option value="option2">Signature 2</option>
            <option value="option3">Signature 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5 8l5 5 5-5z" />
            </svg>
          </div>
        </div>

        <button
          type="button"
          className="ml-2 bg-white border border-[#5707E4] text-black py-2 px-4 rounded mb-2 md:mb-0 md:ml-2"
        >
          Rename
        </button>

        <button
          type="button"
          className="ml-2 bg-white border border-[#5707E4] text-black py-2 px-4 rounded mb-2 md:mb-0"
        >
          <img src="/trash.png" className='px-4' alt="" />
        </button>

        <button
          type="button"
          className="ml-2 bg-white border border-[#5707E4] text-black py-2 px-4 rounded"
        >
          + Add New Signature
        </button>
      </div>
    </div>
  );
}

export default From;
