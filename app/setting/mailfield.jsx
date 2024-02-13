import React from 'react';

function MailFiled() {
  const signatureOptions = ['Signature 1', 'Signature 2', 'Signature 3'];

  const renderSignatureDropdown = () => (
    <div className="relative inline-block">
      <label htmlFor="signatureDropdown"></label>
      <select
        id="signatureDropdown"
        name="signatureDropdown"
        className="block appearance-none w-full md:w-96 bg-white border border-[#5707E4] text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
      >
        {signatureOptions.map((option, index) => (
          <option key={index} value={`option${index + 1}`}>
            {option}
          </option>
        ))}
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
  );

  return (
    <div className="container mx-auto px-4">
      <div className="border h-auto md:h-80">
        <div className="bg-[#E9EBF0] md:p-3  flex rounded">
          <div className="flex md:flex-row gap-4">
            {['T.png', '1.png', '3.png', '4.png', '5.png', '6.png', 'trash.png'].map((image, index) => (
              <img
                key={index}
                src={`/${image}`}
                className={`border p-2 ${index === 2 ? 'w-10 h-10' : ''} rounded bg-[#FAFBFC]`}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 px-3 py-3">
          {['Name / Surname', 'Title', 'Company', 'Address', 'Phone Number', 'website', 'email disclaimer'].map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>

      <div>
        <h1 className="mt-7 font-bold text-xl md:text-2xl">Select default signatures:</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-11 mb-5">
        <label htmlFor="newMessages">For New Messages:</label>
        {renderSignatureDropdown()}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 mb-5">
        <label htmlFor="repliesForwards">For Replies / Forwards:</label>
        {renderSignatureDropdown()}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 mb-5">
        <button className="border border-[#5707E4] md:ml-auto md:-top-5  p-2 rounded">Save Email Signature</button>
      </div>
    </div>
  );
}

export default MailFiled;
