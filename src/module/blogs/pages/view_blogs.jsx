import React, { useState, useEffect } from 'react';
import BlogItem from '../components/blog_item';
import api_url from "../../../utils/utils";
import BlogItemDetails from '../components/blog_item_details';
import Filter from '../../../global_components/filter/filter';
import { useNavigate } from 'react-router-dom';

function ViewBlogs({handleSearch,handleSort,handleLayoutChange,blogs_data,layout}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (loading) {
        return <h2 className='center'>Loading...</h2>;
    }

    if (error) {
        return <h2 className='center'>Error: {error}</h2>;
    }

    return (
        <section className='p-3 mt-0'>
            <div>
            <Filter onSearch={handleSearch}
                onSort={handleSort}
                onLayoutChange={handleLayoutChange} />
            </div>
            {blogs_data.length > 0 ? (
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
                    layout
                        ? 'lg:grid-cols-4'
                        : 'lg:grid-cols-5'
                }`}>
                    {blogs_data.map((blog_data, index) => (
                        <BlogItemDetails data={blog_data} key={index} />
                    ))}
                </div>
            ) : (
                <h2 className='center'>No Posts Found</h2>
            )}
        </section>
    );
}

export default ViewBlogs;
