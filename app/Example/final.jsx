import React from 'react';

function Form() {
  return (
    <div className='p-4 md:p-8'>

      <div className='mb-6 md:mb-10'>
        <h1 className="text-xl mb-2">From</h1>
        <select className='w-full p-3 bg-white border-2 border-gray-400 rounded' name="" id="">
          <option value="">Simone Plessis simonedpls@gmail.com</option>
          <option value="">Search for a Campaign</option>
          <option value="">1222</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-6 md:mb-0 md:mr-4">
          <h1 className="text-xl mb-2">Campaign</h1>
          <select className='w-full md:w-96 p-3 bg-white border-2 border-gray-400 rounded' name="" id="">
            <option value="">Search for a Campaign</option>
            <option value="">Search for a Campaign</option>
            <option value="">1222</option>
          </select>
        </div>

        <div className="mb-6 md:mb-0">
          <h1 className="text-xl mb-2">Template</h1>
          <select className='w-full md:w-96 p-3 bg-white border-2 border-gray-400 rounded' name="" id="">
            <option value="">Search for a Campaign</option>
            <option value="">Search for a Campaign</option>
            <option value="">1222</option>
          </select>
        </div>
      </div>

      <div className='mb-6'>
        <h1 className="text-xl mb-2">Subject </h1>
        <input
          type="text"
          placeholder='Type a subject for your email'
          className='p-3 w-full border-gray-400 border-2 rounded'
        />
      </div>

<div className='w-full border-gray-400 border-2 p-2 rounded flex justify-between '>
    <span>Body</span>
    <div className="mb-6 md:mb-0">
          <select className='w-full md:w-44 p-2 bg-white border-2 border-gray-400 rounded' name="" id="">
            <option value="">Show Signature</option>
            <option value="">Search for a Campaign</option>
            <option value="">1222</option>
          </select>
        </div>
</div>
      <div className='w-full h-48 md:h-96 mb-6'>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className='w-full h-full border-2 border-gray-300 rounded resize-none'
        >
        </textarea>
      </div>

      <button className='w-full md:w-auto px-4 bg-blue-500 p-2 float-right text-white rounded'>
        Send
      </button>
    </div>
  );
}

export default Form;
