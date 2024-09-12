import React, { useContext } from 'react';
import { BlogDataContext } from '../../../context/Blog_Context';

const NotificationFilter = ({ sortBy, setSortBy, sortOrder, setSortOrder, search, setSearch }) => {

    const {theme,theme2,fontColor,fontStyle,fontWeight} = useContext(BlogDataContext);


    return (
        <div className={`flex justify-between items-center mb-6 text-${fontColor}-600 ${fontWeight} ${fontStyle} shadow-md rounded-lg p-4`} 
        style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by subject or sender"
                className="border border-gray-300 rounded p-2 flex-1 mr-4"
            />
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded p-2 bg-white mr-4"
            >
                <option value="date_entered">Sort by Date</option>
                <option value="subject">Sort by Subject</option>
            </select>
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded p-2 bg-white"
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
};

export default NotificationFilter;
