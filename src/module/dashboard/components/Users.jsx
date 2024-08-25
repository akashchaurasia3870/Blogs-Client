import React, { useState } from 'react';
import Pagination from '../../../global_components/pagination/pagination';
import image_ref_c from '../../../assets/img/img7.jpg'; 
import DashBlogItem from './DashBlogItem/DashBlogItem';

const Users = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('name');
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Sample user data
    const users = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150', 
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '+1 234 567 890',
            followers: 1500,
            posts: 25,
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            phone: '+1 987 654 321',
            followers: 2500,
            posts: 30,
        },
        // Add more user data as needed
    ];

    // Sort and paginate the users
    const sortedUsers = [...users].sort((a, b) => {
        if (sortBy === 'name') {
            return sortOrder === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }
        return 0;
    });

    const openModal = (user) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedUser(null);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3; // Adjust as per the number of pages needed

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Fetch data for the new page or update the displayed content
    };

    return (
        <div className="px-4 min-h-[86vh] flex flex-col justify-between pb-4">
            {/* Header */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Users</h1>
                    <div className="flex space-x-4">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="border border-gray-300 rounded p-2"
                        >
                            <option value="name">Sort by Name</option>
                            {/* Add more sort options if necessary */}
                        </select>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="border border-gray-300 rounded p-2"
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>

                {/* User Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedUsers.map((user) => (
                        <div key={user.id} className="bg-white p-4 rounded-lg shadow-md cursor-pointer" 
                        // onClick={() => openModal(user)}
                        >
                            <img src={user.image} alt={user.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-bold">{user.name}</h2>
                            <p className="text-gray-500 my-2">
                                    <span className="font-semibold">Email:</span> {user.email}
                                </p>
                                <p className="text-gray-500 mb-2">
                                    <span className="font-semibold">Phone:</span> {user.phone}
                                </p>
                                <p className="text-gray-500 mb-2">
                                    <span className="font-semibold">Followers:</span> {user.followers}
                                </p>
                                <p className="text-gray-500 mb-0">
                                    <span className="font-semibold">Posts:</span> {user.posts}
                                </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                        >
                            &times;
                        </button>
                        {selectedUser && (
                            <>
                                <h2 className="text-2xl font-bold mb-4">{selectedUser.name}</h2>
                                <img
                                    src={selectedUser.image || image_ref_c}
                                    alt={selectedUser.name}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <p className="text-gray-500 mb-2">
                                    <span className="font-semibold">Email:</span> {selectedUser.email}
                                </p>
                                <p className="text-gray-500 mb-2">
                                    <span className="font-semibold">Phone:</span> {selectedUser.phone}
                                </p>
                                <p className="text-gray-500 mb-2">
                                    <span className="font-semibold">Followers:</span> {selectedUser.followers}
                                </p>
                                <p className="text-gray-500 mb-4">
                                    <span className="font-semibold">Posts:</span> {selectedUser.posts}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;

