"use client"
import React, { useRef, useState } from 'react';
import Link from 'next/link';

function Setting() {
  const menuItems = [
    { label: 'Mailbox', icon: 'home.png', path: '/mailbox' },
    { label: 'Campaign', icon: 'group.png', path: '/campaign' },
    { label: 'Templates', icon: 'group2.png', path: '/templates' },
    { label: 'Settings', icon: 'group3.png', path: '/setting' },
    { label: 'Automation', icon: 'group4.png', path: '/automation' },
  ];

  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    e.preventDefault();
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (startX !== null) {
      const difference = startX - e.touches[0].pageX;
      containerRef.current.scrollLeft += difference;
      setStartX(e.touches[0].pageX);
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    setStartX(null);
  };

  return (
    <div>
      <nav
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex items-center justify-between px-4 py-2 border-b border-gray-300 overflow-x-auto"
      >
        <ul className="flex space-x-4">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {/* Use Link component without the 'as' prop */}
              <Link href={item.path}>
                <div className="text-gray-600 font-medium hover:text-gray-800 border-r border-gray-300 pr-4 flex items-center">
                  <img
                    src={item.icon}
                    alt={`${item.label} Icon`}
                    className="mr-2 h-4 w-4 object-cover"
                  />
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
          {/* Second input after "Automation" without a border */}
          <li className="flex items-center">
            <input
              type="text"
              placeholder="Search Mailbox"
              className="rounded-md px-3 py-2 text-gray-600 font-medium focus:ring-blue-500 focus:border-blue-500 border-none"
            />
          </li>
        </ul>
        <div className="flex items-center space-x-2">
          <button className="bg-[#FFE237] hover:bg-blue-700 text-black text-2xl font-medium px-4 py-2 rounded-md">+</button>
          <input
            type="text"
            placeholder="Search in the Platform"
            className="rounded-md border border-gray-300 px-3 py-2 text-gray-600 font-medium focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </nav>
    </div>
  );
}

export default Setting;
