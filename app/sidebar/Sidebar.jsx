"use client"
import React, { useState, useEffect, useRef } from 'react';
import Categories from '../All/page';
import Mail from '../mails/Mail';
import MegaMenu from '../MegaMenu/MegaMenu';
import Setting from '../settingHeader/page';


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sidebarRef = useRef(null);

    const closeSidebarOnOutsideClick = (event) => {
        if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
            setSelectedDropdown(null);
        }
    };

    const handleDropdownClick = (index) => {
        setSelectedDropdown(selectedDropdown === index ? null : index);
    };

    useEffect(() => {
        document.addEventListener('click', closeSidebarOnOutsideClick);

        return () => {
            document.removeEventListener('click', closeSidebarOnOutsideClick);
        };
    }, [isSidebarOpen, selectedDropdown]);

    const mailOptions = [
        { icon: 'group.png', label: 'Inbox', count: 3 },
        { icon: 'draft.png', label: 'Drafts', count: 3 },
        { icon: 'spam.png', label: 'Spam', count: 3 },
        { icon: 'trash.png', label: 'Trash', count: 3 },
    ];

    const dropdownContents = [
        { label: 'Dropdown 1 Content' },
        { label: 'Dropdown 2 Content' },
        { label: 'Dropdown 3 Content' },
    ];

    return (
        <div className="relative h-screen dark:bg-gray-800">
            <button
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                ref={sidebarRef}
                id="separator-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0`}
                aria-label="Sidebar"
            >

                <div className="h-full px-2 py-4 border overflow-y-auto bg-white dark:bg-gray-800">

                    <div>
                        <h1 className='text-2xl font-bold'>Mailbox</h1>

                        <p className='text-[#146EF6]'>anna@quomeda.com</p>
                    </div>
                    <select name="" id="" className='border-2 px-6 py-1 rounded outline-none'>
                        <option value="">Email</option>
                        <option value="">Campaign</option>
                    </select>

                    <ul className="space-y-2 font-medium">
                        {mailOptions.map((option, index) => (
                            <li key={index} className="relative">
                                <a
                                    href="#"
                                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDropdownClick(index);
                                    }}
                                >
                                    <img
                                        src={`/${option.icon}`}
                                        alt=""
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    />
                                    <span className="flex-1 ms-3 whitespace-nowrap">{option.label}</span>
                                    {option.count !== undefined && (
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 font-bold text-blue-800">{option.count}</span>
                                    )}
                                </a>
                                {selectedDropdown === index && (
                                    <ul className="absolute left-full top-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 rounded-lg">
                                        {dropdownContents.map((content, contentIndex) => (
                                            <li key={contentIndex}>{content.label}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <label htmlFor="liveProjectsDropdown" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Live Projects
                            </label>
                            <select
                                id="liveProjectsDropdown"
                                name="liveProjectsDropdown"
                                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="volvo">
                                    <img src="/live.png" alt="" className="" />
                                    Q0523
                                </option>
                                <option value="saab">
                                   
                                    Q0523
                                </option>
                                <option value="mercedes">
                                   
                                    Q0523
                                </option>
                                <option value="audi">
                                   
                                    Q0523
                                </option>
                            </select>
                        </div>
                    </ul>



                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <label htmlFor="liveProjectsDropdown" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Live Deals
                            </label>
                            <select
                                id="liveProjectsDropdown"
                                name="liveProjectsDropdown"
                                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="volvo">
                                   
                                    Q0523
                                </option>
                                <option value="saab">
                                   
                                    Q0523
                                </option>
                                <option value="mercedes">
                                   
                                    Q0523
                                </option>
                                <option value="audi">
                                    
                                    Q0523
                                </option>
                            </select>
                        </div>
                    </ul>



                    <div className='mt-10'>
                        <h1 className='text-gray-400 font-medium mb-1'>Folders</h1>
                        <div className='px-1'>
                            <h2>Incentives</h2>
                            <h2>Clients</h2>
                            <h2>Archives</h2>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h1 className='text-blue-400'>+ Create New Folder</h1>
                    </div>
                </div>
            </aside>

            <div className="sm:ml-64">
                <div className=" p-5 rounded-lg dark:border-gray-700">
                    <div className=''>
                        <Setting />
                        <Categories />
                        <MegaMenu />
                        <Mail />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
