"use client"
import React, { useState, Fragment } from 'react';
import Form from '../Example/final';

const options = [
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'Theresa Webb', dropdownLabel2: 'Pinco Palino', image2: '/error.png' },
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'John Doe', dropdownLabel2: 'Pinco Palino', image2: '/error.png' },
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'Jane Smith', dropdownLabel2: 'Pinco Palino', image2: '/error.png' },
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'Bob Johnson', dropdownLabel2: 'Pinco Palino', image2: '/error.png' },
    { label: 'Italy IC Panel', description: '66 Emails for Campaign XX', icon: 'vector.png', dropdownLabel: 'Bob Johnson', dropdownLabel2: 'Pinco Palino', image2: '/error.png' },
];

function Page() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [optionStates, setOptionStates] = useState(options.map(() => ({ isOpen: false, iconRotation: 0 })));

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (index, event) => {
    const newOptionStates = [...optionStates];
    newOptionStates[index].isOpen = !newOptionStates[index].isOpen;
    newOptionStates[index].iconRotation = newOptionStates[index].isOpen ? 180 : 0;
    setOptionStates(newOptionStates);
    if (newOptionStates[index].isOpen) {
      event.stopPropagation();
    }
  };

  // const DropdownContent = ({ label }) => (
  //   <div className='flex justify-between border p-2 mb-2 mt-2'>
  //     <img src="/tick2.png" className='w-4 h-4 my-1' alt="" />
  //     <img src="/flag.png" className='w-5 h-5 -mx-10 mt-1' alt="" />
  //     <label htmlFor="" className=''>{label}</label>
  //     <div className='flex gap-3 items-center'>
  //       <img src="/tick.png" className='relative left-4 w-2 -top-3' alt="" />
  //       <img src="/primary.png" className='w-6 h-6 border p-1 border-gray-600 rounded' alt="" />
  //       <img src="/dots.png" className='h-6 border p-1 border-gray-600 rounded' alt="" />
  //     </div>
  //   </div>
  // );


  const DropdownContent = ({ label }) => {
    const option = options.find((opt) => opt.dropdownLabel === label);
  
    return (
      <div className='flex justify-between border p-2 mb-2 mt-2'>
        <img src="/tick2.png" className='w-4 h-4 my-1' alt="" />
        <img src="/flag.png" className='w-5 h-5 -mx-10 mt-1' alt="" />
        <label htmlFor="" className=''>{label}</label>
        <div className='flex gap-3 items-center'>
          {label === option?.dropdownLabel2 && <img src="/different_image.png" className='w-4 h-4 my-1' alt="" />}
          {label !== option?.dropdownLabel2 && <img src="/tick.png" className='relative left-4 w-2 -top-3' alt="" />} 
          {label === option?.dropdownLabel2 && <img src="/error.png" className='relative left-4 w-2 -top-3' alt="" />}
          <img src="/primary.png" className='w-6 h-6 border p-1 border-gray-600 rounded' alt="" />
          <img src="/dots.png" className='h-6 border p-1 border-gray-600 rounded' alt="" />
        </div>
      </div>
    );
  };
  
  
  
  

  
  


 

  
  


  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
     >
        <span className="sr-only">Open sidebar</span>
      </button>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isDropdownOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full w-80 px-3 py-4 overflow-y-auto border bg-white dark:bg-gray-800">
          <div>
          <h5 id="drawer-navigation-label" className="text-xl font-semibold py-1 text-black uppercase dark:text-gray-400">
          54 Batches
        </h5>
          </div>
          <div className="flex items-center">
  <input
    type="text"
    placeholder="Search"
    className="p-2 bg-[#F1F1F1] rounded-md mb-3 mr-2"
    name=""
    id=""
  />
  <button className="flex items-center bg-white -mt-3 p-2 shadow-md">
    <img src="/filter.png" className="mr-1" alt="" />
    Filter
  </button>
</div>

          
          <ul>
            {options.map((option, index) => (
              <Fragment key={index}>
                <li className="border rounded-sm  border-gray-300 flex items-center  gap-3 mb-2">
                  <h1 className='text-lg border-r px-1 border-black h-full flex-shrink-0'>{index + 1}</h1>
                  <div className="flex flex-col">
                    <a href="#" className="text-gray-900 hover:text-blue-500">
                      {option.label}
                    </a>
                    <p className="whitespace-nowrap">
  <span className="text-blue-500">66 Emails</span> <span className='text-gray-500'>for </span><span className="text-[#5707E4]">Campaign XX</span>
</p>

                  </div>
                  <img
                    src={option.icon}
                    alt="Icon"
                    className={`w-3 h-2 ml-3 cursor-pointer transition-transform transform rotate-${optionStates[index].iconRotation} border-r border-gray-300 h-full`}
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
      </aside>
      <div className=" px-10 sm:ml-64">
        <div className="px-4">
        <Form />
        </div>
      </div>
    </div>
  );
}

export default Page;
