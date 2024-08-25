import React, { useState } from 'react'
import dummy_data from '../../../assets/data/data.json';
import img5 from '../../../assets/img/img5.jpg'
import { Link } from 'react-router-dom';
import PopularAuthorCard from '../components/populer_author_card';

function Authors() {

    let [authorData, setAuthorsData] = useState(dummy_data.dummy_authors);
    return (
        <section className='min-h-[100vh] authors w-full'>

            {authorData.length > 0 ?

                <div className=" authors_container bg-gray-400 py-2 px-2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {authorData.map((author) => {
                        {
                            console.log(author);
                        }
                        // return (
                        //     <Link to={`/blogs/users/${author.id}`} className={`author flex flex-row justify-start items-center py-1 w-[240px] rounded-md my-2 mx-2 hover:scale-[1.1] duration-300 ease-in-out`} style={{ background: `#${author.theme}` }} >
                        //         <div className="author_avatar h-16 w-16 rounded-3xl ml-2">
                        //             <img src={`${img5} `} alt="" className='rounded-full' />
                        //         </div>
                        //         <div className="author_info ml-2 py-5 text-white w-[60%] px-2 flex flex-col justify-between relative">
                        //             <div className='text-white-600 absolute -top-3 text-[20px]'>{author.name}</div>
                        //             <div className='absolute -bottom-2 text-[15px]'>Blogs <b>{author.blogs}</b></div>
                        //         </div>
                        //     </Link>
                        // )

                        return (
                            <Link to={`/blogs/users/${author.id}`} className={`author flex flex-row justify-start items-center py-1 rounded-md my-2 mx-2 hover:scale-[1.025] duration-300 ease-in-out`} style={{ background: `#${author.theme}` }} >
                                <PopularAuthorCard author={author} />
                                {/* <div className="author_avatar h-16 w-16 rounded-3xl ml-2">
                                    <img src={`${img5} `} alt="" className='rounded-full' />
                                </div>
                                <div className="author_info ml-2 py-5 text-white w-[60%] px-2 flex flex-col justify-between relative">
                                    <div className='text-white-600 absolute -top-3 text-[20px]'>{author.name}</div>
                                    <div className='absolute -bottom-2 text-[15px]'>Blogs <b>{author.blogs}</b></div>
                                </div> */}
                            </Link>
                        )
                    })}

                </div>
                :
                <div className="authors_container container">
                    <h2>No blogs Present For Author</h2>
                </div>

            }

        </section >
    )
}

export default Authors