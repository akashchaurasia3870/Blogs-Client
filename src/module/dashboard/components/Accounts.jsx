import React, { useState } from 'react';

const AccountPage = () => {
    // Initial user details
    const [userDetails, setUserDetails] = useState({
        username: 'admin',
        email: 'admin@example.com',
        phone: '123-456-7890',
        address: '123 Admin St, Admin City',
        profilePic: '', // URL or file path to profile picture
        password: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // Handle profile picture upload
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    profilePic: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here (e.g., send data to API)
        console.log('Updated user details:', userDetails);
    };

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            <h1 className="text-2xl font-bold mb-6">Account Details</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-4 mb-6">
                    <div className="relative w-32 h-32">
                        <img
                            src={userDetails.profilePic || 'https://via.placeholder.com/128'}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePicChange}
                            className="absolute bottom-0 right-0 opacity-0"
                            id="profilePic"
                        />
                        <label htmlFor="profilePic" className="absolute bottom-0 right-0 bg-gray-700 text-white p-1 rounded-full cursor-pointer">
                            Change
                        </label>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium">Profile Picture</h2>
                    </div>
                </div>

                {/* Username */}
                <div className="flex flex-col mb-6">
                    <label htmlFor="username" className="text-lg font-medium mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userDetails.username}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col mb-6">
                    <label htmlFor="email" className="text-lg font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col mb-6">
                    <label htmlFor="phone" className="text-lg font-medium mb-2">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={userDetails.phone}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>

                {/* Address */}
                <div className="flex flex-col mb-6">
                    <label htmlFor="address" className="text-lg font-medium mb-2">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={userDetails.address}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col mb-6">
                    <label htmlFor="password" className="text-lg font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Update Details
                </button>
            </form>
        </div>
    );
};

export default AccountPage;
