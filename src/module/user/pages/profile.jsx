import React, { useState, useEffect, useContext } from "react";
import img from '../../../assets/img/img8.jpg';
import { BlogDataContext } from "../../../context/Blog_Context";
import api_url from "../../../utils/utils";
const Profile = () => {
    // State to store form values, edit mode, and original data
    // const { data.data, setUserData } = useContext(BlogDataContext);

    // console.log(data.data);

    let [image_url, setImageUrl] = useState(null);
    // if (data.data?.userImage != null && data.data?.userImage != undefined) {
    //     setImageUrl(data.data.userImage);
    // }

    const [isEditable, setIsEditable] = useState(false);
    const [profileData, setProfileData] = useState({});
    const [originalData, setOriginalData] = useState({});

    // Fetch user details from API on component mount
    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {



            const response = await fetch(`${api_url}/users/get_user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token"),
                },
            }); // Replace with actual API endpoint
            const data = await response.json();
            console.log(data.data);

            let data_c = {
                username: data.data?.username,
                email: data.data?.email,
                password: data.data?.password,
                blogsNo: 0,
                mobileNo: data.data?.phone,
                address: data.data?.address.country,
                userImage: data.data?.userImage,
            }
            setImageUrl(api_url + data_c.userImage);
            setProfileData(data_c);
            setOriginalData(data_c);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    };

    // Handle image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // setProfileData({ ...profileData, userImage: reader.result });
                setImageUrl(reader.result)
            };
            reader.readAsDataURL(file);


            handleFileUpload(file, "image");
        }
    };

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditable(!isEditable);
        if (!isEditable) {
            setOriginalData(profileData); // Save current data before editing
        }
    };

    // Cancel editing
    const cancelEdit = () => {
        setImageUrl(api_url + originalData.userImage)
        setProfileData(originalData); // Revert to original data
        setIsEditable(false);
    };

    const handleFileUpload = (file, type) => {


        const reader = new FileReader();
        reader.onloadend = () => {
            const binaryData = reader.result;

            fetch(`${api_url}/upload`, {
                method: "POST",
                headers: {
                    "Content-Type": file.type,
                    "Authorization": localStorage.getItem("token"),
                },
                body: binaryData,
            })
                .then((response) => response.json())
                .then((data) => {

                    setProfileData({ ...profileData, userImage: data.fileUrl });

                })
                .catch((error) => console.error("Error uploading file:", error));
        };
        reader.readAsArrayBuffer(file);



    };

    // Update user details
    const updateUserDetails = async () => {
        try {
            let url = api_url + '/users/update_user';
            console.log(profileData);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token"),
                },
                body: JSON.stringify(profileData),
            });
            if (response.ok) {
                console.log("User details updated successfully.");
                let data_c = {
                    username: response.data?.username,
                    email: response.data?.email,
                    password: response.data?.password,
                    blogsNo: 0,
                    mobileNo: response.data?.phone,
                    address: response.data?.address.country,
                    userImage: response.data?.userImage,
                }
                setProfileData(data_c);
                setOriginalData(data_c);
                setImageUrl(api_url + originalData.userImage)
                setIsEditable(false);
            } else {
                console.error("Failed to update user details.");
            }
        } catch (error) {
            console.error("Error updating user details:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full ">
                <h2 className="text-2xl font-semibold mb-6">Profile Page</h2>
                <div className="flex flex-row-reverse justify-center items-center ">
                    {/* User Image Section */}
                    <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
                        <img
                            src={image_url}
                            alt="User"
                            className="rounded-full h-32 w-32 object-cover mb-4 shadow-md p-1"
                        />
                        {isEditable && (
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="p-2 rounded-lg bg-gray-300 text-sm text-white
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-gray-400"
                            />
                        )}
                    </div>

                    {/* Profile Details Section */}
                    <div className="w-full lg:w-3/5 pl-6">
                        <form className="space-y-4">
                            <div className="input_container">
                                <label className="block text-gray-700">Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={profileData.username}
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    className="mt-1 block w-full rounded-md bg-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="input_container">
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    className="mt-1 block w-full rounded-md bg-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="input_container">
                                <label className="block text-gray-700">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={profileData.password}
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    className="mt-1 block w-full rounded-md bg-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="input_container">
                                <label className="block text-gray-700">Number of Blogs:</label>
                                <input
                                    type="number"
                                    name="blogsNo"
                                    value={profileData.blogsNo}
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    className="mt-1 block w-full rounded-md bg-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="input_container">
                                <label className="block text-gray-700">Mobile No:</label>
                                <input
                                    type="text"
                                    name="mobileNo"
                                    value={profileData.mobileNo}
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    className="mt-1 block w-full rounded-md bg-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="input_container">
                                <label className="block text-gray-700">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={profileData.address}
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    className="mt-1 block w-full rounded-md bg-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex space-x-4 mt-4 input_container">
                                {isEditable ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={updateUserDetails}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            onClick={cancelEdit}
                                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={toggleEdit}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
