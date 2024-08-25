import React from 'react';
import image_ref_c from '../../../../assets/img/img7.jpg'

const DashBlogItem = ({ blog, openBlog }) => {
    const formatDate = (date) => {
        // Replace with your date formatting logic
        return new Date(date).toLocaleDateString();
    };

    return (
        <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg flex items-center flex-col sm:flex-row"
        >
            <img
                src={image_ref_c || "path/to/dummy-image.jpg"}
                alt={blog.title || "Dummy Title"}
                className="w-16 h-16 rounded-md mr-0 sm:mr-4 mb-4 sm:mb-0"
            />
            <div className="flex-1 text-center sm:text-left">
                <p className="text-gray-900 font-semibold">
                    {blog.title || "Dummy Title"}
                </p>
                <p className="text-gray-500 text-sm">
                    {blog.author || "Unknown Author"}
                </p>
                <div className="flex items-center justify-center sm:justify-start text-sm text-gray-500">
                    <p className="mr-4">{formatDate(blog.date_created) || "N/A"}</p>
                    <p className="mr-4">Views: {blog.views || "0"}</p>
                    <p>Likes: {blog.likes || "0"}</p>
                </div>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    openBlog(blog);
                }}
                className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600 mt-4 sm:mt-0"
            >
                View Blog
            </button>
        </div>
    );
};

export default DashBlogItem;
