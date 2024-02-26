import React from 'react';

const DropdownMenu = ({ options }) => {
  return (
    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
      <div className="py-1">
        {options.map((option, index) => (
          <div
            key={index}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            onClick={option.onClick}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
