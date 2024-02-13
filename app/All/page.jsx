"use client"
import React, { useRef, useState } from 'react';

const categories = [
  { name: 'All', color: '' },
  { name: 'Panel', color: '#3474E0', newCount: 1 },
  { name: 'Clients', color: '#3474E0', newCount: 1 },
  { name: 'Agencies', color: '#41B883', newCount: 1 },
];

function Categories() {
  const [startX, setStartX] = useState(null);
  const containerRef = useRef(null);

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
      className="container mx-auto overflow-x-auto"
    >
      <div className="flex border justify-start items-start border-gray-300 gap-24">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`py-2 px-2 ${index !== categories.length - 1 ? 'border-b' : ''} ${
              index !== 0 ? 'border-r' : ''
            } flex items-center gap-1 whitespace-nowrap`}
          >
            {category.name}
            {category.newCount && (
              <div
                className={`bg-${category.color} py-1 px-2 text-sm mx-1 text-white rounded-sm`}
              >
                {category.newCount} New
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
