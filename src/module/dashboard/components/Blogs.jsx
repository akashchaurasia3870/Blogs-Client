import React, { useContext, useEffect, useState } from 'react';
import Pagination from '../../../global_components/pagination/pagination';
import image_ref_c from '../../../assets/img/img7.jpg'
import DashBlogItem from './DashBlogItem/DashBlogItem';
import { BlogDataContext } from '../../../context/Blog_Context';
import { CSVDownload } from "react-csv";
import api_url, { exportPdf } from '../../../utils/utils';



const Blogs = () => {

    const {theme,theme2,fontColor,fontStyle,fontWeight} = useContext(BlogDataContext);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('name');
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [download, setDownload] = useState(false);
    const [blogs, setBlogsData] = useState([]);
    const [search, setSearch] = useState('');

        
    // pagination 
    const [pages,setPages] = useState(1);
    const [totalPages,setTotalPages] = useState(0);
    const [totalCount,setTotalCount] = useState(0);
    const [limit,setLimit] = useState(5);

    
    const sortedBlogs = [...blogs].sort((a, b) => {
        if (sortBy === 'name') {
            return sortOrder === 'asc'
                ? a.caption.localeCompare(b.caption)
                : b.caption.localeCompare(a.caption);
        } else if (sortBy === 'date') {
            return sortOrder === 'asc'
                ? new Date(a.date_created) - new Date(b.date_created)
                : new Date(b.date_created) - new Date(a.date_created);
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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDownload = () => {
        setDownload(true);
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

    const getBlogs = async ()=>{
        console.log(search,sortBy,sortOrder,limit,pages);

        fetch(`${api_url}/blogs/get_blogs`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    pages,
                    limit,
                    "sort":sortBy,
                    "sort_order":sortOrder,
                    "search":search
                }),

            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {            
            setBlogsData(data.data);
            setTotalCount(data.pagination_data.totalCount)
            setTotalPages(data.pagination_data.totalPages)
        }).catch(error => {
            setTimeout(() => {
                // setIsLoading(false);
            }, 2000)
            console.log(error.message);
            
        });
    }

    useEffect(()=>{
             getBlogs();
    },[pages,sortBy,sortOrder,search])


    return (
        <div className="px-4 min-h-[86vh] flex flex-col justify-between pb-4">
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h1 className={`text-2xl font-bold  text-${fontColor}-600 ${fontStyle} ${fontWeight}`}>Blogs</h1>
                    <div className="flex space-x-4">
                        <span className={`border border-gray-300 rounded p-2 bg-${theme} cursor-pointer text-${fontColor}-600 ${fontStyle} ${fontWeight} `} onClick={()=>{
                            exportPdf(blogs)
                        }}>Export PDF</span>

                        <span className={`border border-gray-300 rounded p-2 bg-${theme} cursor-pointer text-${fontColor}-600 ${fontStyle} ${fontWeight} `} onClick={handleDownload}>Export Excel</span>
                         {download && (
                            <CSVDownload
                            data={blogs}
                            onComplete={() => setDownload(false)} // Reset after download
                            />
                        )}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className={`border border-gray-300 rounded p-2 bg-${theme} text-${fontColor}-600 ${fontStyle} ${fontWeight} `}
                        >
                            <option value="name">Sort by Name</option>
                            <option value="date">Sort by Date</option>
                            <option value="likes">Sort by Likes</option>
                        </select>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className={`border border-gray-300 rounded p-2 bg-${theme} text-${fontColor}-600 ${fontStyle} ${fontWeight}`}
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>

            {/* Blog Content */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}

                {/* {blogs.map((blog) => (
                     <DashBlogItem blog={blog} />
                ))} */}

            {/* </div> */}

                <div className="">
                    <div className="pb-4">
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                        </div>
                        <div className="overflow-x-auto">
                        <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden" 
                        style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}
                        >
                            <thead >
                            <tr>
                                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Image
                                </th>
                                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Title
                                </th>
                                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date Created
                                </th>
                                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Likes
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {blogs.map((item) => (
                                <tr key={item.id} 
                                >
                                <td className="px-5 py-5 text-sm">
                                    <img src={api_url+item.filePaths.images} alt={'img'} className="w-20 h-20 rounded-md object-cover" />
                                </td>
                                <td className="px-5 py-5 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.caption}</p>
                                </td>
                                <td className="px-5 py-5 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.date_created}</p>
                                </td>
                                <td className="px-5 py-5 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.likes}</p>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
           
            <Pagination 
                currentPage={pages} 
                totalPages={totalPages} 
                setPages={setPages} 
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
