

import React, { useState } from 'react';
import { FaThLarge, FaThList } from 'react-icons/fa';

const Filter = ({ onSearch, onDateFilter, onSort, onLayoutChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [isGrid, setIsGrid] = useState(true); // State to manage grid layout

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        onSort(e.target.value);
    };

    const toggleGridLayout = () => {
        setIsGrid(!isGrid);
        onLayoutChange(!isGrid); // Pass the layout state to the parent
    };

    return (
        <div className="p-4 my-4 bg-gray-200 rounded-lg flex flex-col md:flex-row justify-between items-center bg2">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="flex items-center space-x-4 w-1/2 md:w-1/2 lg:w-2/12">
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="" disabled selected>Sort by</option>
                    <option value="title">Title</option>
                    <option value="date_created">Date</option>
                    <option value="author">Author</option>
                    <option value="likes">Likes</option>
                    <option value="views">Views</option>
                </select>

                <button
                    onClick={toggleGridLayout}
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 flex items-center justify-center"
                    title="Toggle Grid/List Layout"
                >
                    {isGrid ? <FaThList className="text-lg" /> : <FaThLarge className="text-lg" />}
                </button>
            </div>
        </div>
    );
};

export default Filter;