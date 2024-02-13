import React, { useState, useRef } from 'react';

const menuItems = [
  { name: 'From', iconSrc: '/icon.png', dropdownContent: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Status', iconSrc: '/icon.png', dropdownContent: ['Option 4', 'Option 5', 'Option 6'] },
  { name: 'Code', iconSrc: '/icon.png', dropdownContent: ['Option 7', 'Option 8', 'Option 9'] },
  { name: 'Assignee', iconSrc: '/icon.png', dropdownContent: ['Option 7', 'Option 8', 'Option 9'] },
  { name: 'Subject', iconSrc: '/icon.png', dropdownContent: ['Option 7', 'Option 8', 'Option 9'] },
  { name: 'PREVIEW', iconSrc: '/icon.png', dropdownContent: ['Option 7', 'Option 8', 'Option 9'] },
  { name: 'Time', iconSrc: '/icon.png', dropdownContent: ['Option 7', 'Option 8', 'Option 9'] },
];

function MegaMenu() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [startX, setStartX] = useState(null);
  const containerRef = useRef(null);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    if (startX !== null) {
      const difference = startX - e.touches[0].pageX;
      containerRef.current.scrollLeft += difference;
      setStartX(e.touches[0].pageX);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className='flex items-start border-b border-r bg-[#FAFBFC] text-[#656F7D] overflow-x-auto overflow-y-hidden'
      style={{ height: '50px' }} // Adjust the height as needed
    >
      {menuItems.map((menuItem, index) => (
        <div key={index} className='relative flex-shrink-0'>
          <div className='flex items-center border-r py-2 px-2 ' onClick={() => handleDropdownToggle(index)}>
            {menuItem.name} <div className='px-1 pr-4'> <img src={menuItem.iconSrc} alt="" height={6} width={6} /></div>
          </div>
          {activeDropdown === index && (
            <div className='absolute top-0 left-0 bg-white border border-[#E9EBF0]  p-2'>
              {menuItem.dropdownContent.map((option, optionIndex) => (
                <div key={optionIndex}>{option}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MegaMenu;
