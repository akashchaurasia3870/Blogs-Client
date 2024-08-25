import React, { useEffect, useState ,useContext } from 'react';
import PopularAuthorCard from './populer_author_card';
import api_url from '../../../utils/utils';
import {BlogDataContext } from '../../../context/Blog_Context';

const PopularAuthors = () => {

    let {authors_data} = useContext(BlogDataContext);
    const [authors, setAuthors] = useState(authors_data);
    const [page, setPage] = useState(1);
    const [dataSize, setDataLimit] = useState(5);
    const [totalAuthors, setTotalAuthors] = useState(0);

    const fetchAuthors = async (limit) => {
        try {
            const response = await fetch(`${api_url}/users/get_author`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("token"),
                    },
                    body: JSON.stringify({
                        page: page,
                        pageSize: dataSize,
                        limit: limit,
                    })
                });
            const data = await response.json();
            console.log(data);

            // Set the authors data and the total number of authors
            setAuthors(data.data);
            // setTotalAuthors(response.data.total);
        } catch (error) {
            console.error('Error fetching authors:', error);
        }
    };

    // useEffect(() => {
    //     fetchAuthors(5);
    // }, []);

    console.log(authors);
    


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Popular Authors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {authors.length > 0 && authors.map((author) => (
                    <PopularAuthorCard key={author.user_id} author={author} />
                ))}
            </div>
        </div>
    );
};

export default PopularAuthors;