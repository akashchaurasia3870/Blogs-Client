import React, { useContext, useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { BlogDataContext } from '../../../../context/Blog_Context';

const SearchSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {theme,theme2,fontColor,fontStyle,fontWeight} = useContext(BlogDataContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`flex items-center justify-end py-6 px-2`} style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}>
      {/* Search Input */}
      {/* <div className="flex-grow mr-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}

      {/* Notification Icon */}
      <div className="relative mr-4 text-slate-600 px-2">
        <FaBell className="text-xl cursor-pointer" />
        <span className=" absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 rounded-full">
          3
        </span>
      </div>

      {/* User Icon */}
      <div className="relative text-slate-400 px-2">
        <FaUserCircle
          className="text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 border rounded-md shadow-lg w-48">
            <ul>
              <li className="px-4 py-2 cursor-pointer hover:bg-slate-50" style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}>Profile</li>
              <li className="px-4 py-2 cursor-pointer hover:bg-slate-50" style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
