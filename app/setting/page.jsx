"use client"
import React, { useState, useEffect, useRef } from 'react';
import Setting from '../settingHeader/page';
import Form from './form';
import Headings from './headings';
import MailFiled from './mailfield';

const settings = [
  { label: 'Setting', href: '#' },
  { label: 'Email Accounts', href: '#' },
  { label: 'Email Signature', href: '#' },
  { label: 'Mailbox', href: '#' },
  { label: 'User Settings', href: '#' },
  { label: 'Notifications', href: '#' },
];

function SettingForm() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (event) => {
    // Close sidebar if the click is outside the sidebar and the sidebar is open
    if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Attach click event listener to the document
    document.addEventListener('click', closeSidebar);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <button
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        ref={sidebarRef}
        id="cta-button-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {settings.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F9F5FF] hover:text-[#5707E4] dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 font-bold whitespace-nowrap">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <Setting />
        <Headings />
        <Form />
        <MailFiled />
      </div>
    </div>
  );
}

export default SettingForm;
