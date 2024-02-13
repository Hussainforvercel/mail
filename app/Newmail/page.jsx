"use client";
import React, { useState, Fragment } from 'react';


const options = [
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'Theresa Webb', dropdownLabel2: 'Pinco Palino', image2: '/another-image.png' },
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'John Doe', dropdownLabel2: 'Pinco Palino', image2: '/another-image.png' },
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'Jane Smith', dropdownLabel2: 'Pinco Palino', image2: '/another-image.png' },
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'Bob Johnson', dropdownLabel2: 'Pinco Palino', image2: '/another-image.png' },
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'Bob Johnson', dropdownLabel2: 'Pinco Palino', image2: '/another-image.png' },
];

function NewMail() {
  const [optionStates, setOptionStates] = useState(options.map(() => ({ isOpen: false, iconRotation: 0 })));

  const handleOptionClick = (index, event) => {
    const newOptionStates = [...optionStates];
    newOptionStates[index].isOpen = !newOptionStates[index].isOpen;
    newOptionStates[index].iconRotation = newOptionStates[index].isOpen ? 180 : 0;
    setOptionStates(newOptionStates);
    if (newOptionStates[index].isOpen) {
      event.stopPropagation();
    }
  };

  const DropdownContent = ({ label }) => (
    <div className='flex justify-between border p-2 mb-2 mt-2'>
      <img src="/tick2.png" className='w-4 h-4 my-1' alt="" />
      <img src="/flag.png" className='w-5 h-5 -mx-10 mt-1' alt="" />
      <label htmlFor="">{label}</label>
      <div className='flex gap-3 items-center'>
        <img src="/tick.png" className='relative left-4 w-2 -top-3' alt="" />
        <img src="/primary.png" className='w-6 h-6 border p-1 border-gray-600 rounded' alt="" />
        <img src="/dots.png" className='h-6 border p-1 border-gray-600 rounded' alt="" />
      </div>
    </div>
  );

  return (
    <div className="flex">
     <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 h-screen p-2 overflow-y-auto bg-white border dark:bg-gray-800`}
      tabIndex={-1}
      aria-labelledby="drawer-navigation-label"
    >
        <h5 id="drawer-navigation-label" className="text-base font-semibold px-4 py-1 text-black uppercase dark:text-gray-400">
          54 Batches
        </h5>
        <div className="flex flex-wrap justify-evenly items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Search"
            className="rounded-md border bg-[#F1F1F1] border-gray-300 px-3 py-2 w-82 text-gray-600 font-medium focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="flex justify-center items-center text-gray-500 bg-white  py-2 px-1  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <img src="/filter.png" className='' alt="" />
            Filter
          </button>
        </div>
        <div className="py-4 overflow-y-auto">
          <ul>
            {options.map((option, index) => (
              <Fragment key={index}>
                <li className="border p-2 rounded-sm  border-gray-300 flex items-center  gap-3 mb-2">
                  <h1 className='text-xl border-r p-2 border-black h-full flex-shrink-0'>{index + 1}</h1>
                  <div className="flex flex-col">
                    <a href="#" className="text-gray-900 hover:text-blue-500">
                      {option.label}
                    </a>
                    <p className="text-gray-500 whitespace-nowrap">{option.description}</p>
                  </div>
                  <img
                    src={option.icon}
                    alt="Icon"
                    className={`w-3 h-2 ml-16 cursor-pointer transition-transform transform rotate-${optionStates[index].iconRotation} border-r border-gray-300 h-full`}
                    onClick={(event) => handleOptionClick(index, event)}
                  />
                </li>
                {optionStates[index].isOpen && (
                  <Fragment>
                    <DropdownContent label={option.dropdownLabel} />
                    <DropdownContent label={option.dropdownLabel2} />
                  </Fragment>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow p-6 ml-64">
        {/* Your content goes here */}
      </div>
      {/* <Form /> */}
    </div>
  );
}

export default NewMail;
