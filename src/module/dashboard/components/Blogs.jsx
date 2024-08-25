import React, { useState } from 'react';
import Pagination from '../../../global_components/pagination/pagination';
import image_ref_c from '../../../assets/img/img7.jpg'
import DashBlogItem from './DashBlogItem/DashBlogItem';

const Blogs = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('name');
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Sample blog data
    const blogs = [
        {
            id: 1,
            image: 'https://via.placeholder.com/400x300', 
            title: 'The Joys of Blogging',
            date_created: '2024-08-22',
            likes: 150,
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/400x300',
            title: 'Why React is Amazing',
            date_created: '2024-08-21',
            likes: 250,
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/400x300',
            title: 'Understanding JavaScript Closures',
            date_created: '2024-08-20',
            likes: 180,
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/400x300',
            title: 'A Guide to Tailwind CSS',
            date_created: '2024-08-19',
            likes: 300,
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/400x300',
            title: 'Mastering Redux for State Management',
            date_created: '2024-08-18',
            likes: 220,
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/400x300',
            title: 'The Future of Web Development',
            date_created: '2024-08-17',
            likes: 190,
        },
        {
            id: 7,
            image: 'https://via.placeholder.com/400x300',
            title: 'Exploring Node.js and Express',
            date_created: '2024-08-16',
            likes: 275,
        },
        {
            id: 8,
            image: 'https://via.placeholder.com/400x300',
            title: 'Building RESTful APIs with Express',
            date_created: '2024-08-15',
            likes: 310,
        },
        {
            id: 9,
            image: 'https://via.placeholder.com/400x300',
            title: 'Getting Started with MongoDB',
            date_created: '2024-08-14',
            likes: 200,
        },
        {
            id: 10,
            image: 'https://via.placeholder.com/400x300',
            title: 'Async/Await in JavaScript',
            date_created: '2024-08-13',
            likes: 165,
        },
        {
            id: 11,
            image: 'https://via.placeholder.com/400x300',
            title: 'WebSockets: Real-time Communication',
            date_created: '2024-08-12',
            likes: 240,
        },
        {
            id: 12,
            image: 'https://via.placeholder.com/400x300',
            title: 'Introduction to GraphQL',
            date_created: '2024-08-11',
            likes: 280,
        },
        {
            id: 13,
            image: 'https://via.placeholder.com/400x300',
            title: 'Optimizing Web Performance',
            date_created: '2024-08-10',
            likes: 330,
        },
        {
            id: 14,
            image: 'https://via.placeholder.com/400x300',
            title: 'CSS Grid vs. Flexbox',
            date_created: '2024-08-09',
            likes: 210,
        },
        {
            id: 15,
            image: 'https://via.placeholder.com/400x300',
            title: 'Understanding TypeScript',
            date_created: '2024-08-08',
            likes: 290,
        },
    ];
    

    // Sort and paginate the blogs
    const sortedBlogs = [...blogs].sort((a, b) => {
        if (sortBy === 'name') {
            return sortOrder === 'asc'
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
        } else if (sortBy === 'date') {
            return sortOrder === 'asc'
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date);
        } else if (sortBy === 'likes') {
            return sortOrder === 'asc' ? a.likes - b.likes : b.likes - a.likes;
        }
        return 0;
    });


    const openModal = (blog) => {
        setSelectedBlog(blog);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedBlog(null);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Fetch data for the new page or update the displayed content
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
        if (diffDays === 0) {
            return 'Today';
        } else if (diffDays === 1) {
            return 'Yesterday';
        } else {
            return `${diffDays} days ago`;
        }
    };

    return (
        <div className="px-4 min-h-[86vh] flex flex-col justify-between pb-4">
            {/* Header */}

            <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Blogs</h1>
                <div className="flex space-x-4">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded p-2"
                    >
                        <option value="name">Sort by Name</option>
                        <option value="date">Sort by Date</option>
                        <option value="likes">Sort by Likes</option>
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

            {/* Blog Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                     <DashBlogItem blog={blog} />
                ))}
            </div>
            </div>

            {/* Pagination */}
           
            <Pagination className=''
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                    >
                        &times;
                    </button>
                    {selectedBlog && (
                        <>
                            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
                            <img
                                src={image_ref_c || "https://via.placeholder.com/150"}
                                alt={selectedBlog.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <p className="text-gray-500 mb-2">
                                <span className="font-semibold">Author:</span> {selectedBlog.author || "John Doe"}
                            </p>
                            <p className="text-gray-500 mb-2">
                                <span className="font-semibold">Date:</span> {selectedBlog.date || "2024-08-25"}
                            </p>
                            <p className="text-gray-500 mb-2">
                                <span className="font-semibold">Likes:</span> {selectedBlog.likes || 0}
                            </p>
                            <p className="text-gray-500 mb-4">
                                <span className="font-semibold">Views:</span> {selectedBlog.views || 0}
                            </p>
                            <p>{selectedBlog.content || "This is the blog content."}</p>
                        </>
                    )}
                </div>
            </div>
            
            )}
        </div>
    );
};

export default Blogs;
