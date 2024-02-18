import React from 'react';

function Inbox() {
  return (
    <div className="container mx-auto px-4 py-7 p-20 w-1/2">
      {/* New Email heading */}
      <h1 className="text-2xl font-bold">New Email</h1>

      {/* From and To fields */}
      <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <div className="text-gray-500">From:</div>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border rounded-md w-full py-2 px-3"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-gray-500">To:</div>
          <input
            type="email"
            placeholder="Enter recipient email address"
            className="border rounded-md w-full py-2 px-3"
          />
        </div>
      </div>

      {/* Project or Deal and Template dropdowns */}
      <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="project-or-deal" className="text-gray-500 mb-2">
            Project or Deal:
          </label>
          <select id="project-or-deal" className="border rounded-md py-2 px-3">
            <option>-- Select --</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
            <option value="deal1">Deal 1</option>
            <option value="deal2">Deal 2</option>
          </select>
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="template" className="text-gray-500 mb-2">
            Template:
          </label>
          <select id="template" className="border rounded-md py-2 px-3">
            <option>-- Select --</option>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </select>
        </div>
      </div>

      {/* Subject line */}
      <div className="mt-4 flex items-center space-x-4">
        <div className="text-gray-500">Subject:</div>
        <input
          type="text"
          placeholder="Type a subject for your email"
          className="border rounded-md w-full py-2 px-3"
        />
      </div>

      {/* Email body */}
      <div className="mt-8">
        <div className="border rounded-md p-4">
          <p className="text-gray-700">Body</p>
          <textarea rows="10" className="border rounded-md w-full py-2 px-3" />
        </div>
      </div>

      {/* Show Signature checkbox and Send button */}
      <div className="mt-4 flex items-center justify-end space-x-4">
        <div className="flex items-center">
          <input type="checkbox" id="show-signature" className="mr-2" />
          <label htmlFor="show-signature" className="text-gray-500">
            Show Signature
          </label>
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Inbox;
