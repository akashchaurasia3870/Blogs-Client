
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SimiliarBlogs from '../components/similier_blogs';
import PopularAuthors from '../components/populer_author';
import TrendingBlogs from '../components/tranding_blogs';
import { useLocation } from 'react-router-dom';
import { GrLike } from "react-icons/gr";
import { CiShare1 } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import api_url from '../../../utils/utils';
import Hashtag from '../components/hashtag';
import Silk_Slider from '../../../global_components/silk_slider/slider';
import BlogItemDetails from '../components/blog_item_details';
import data_c from '../../../assets/data/data.json'
import { BlogDataContext } from '../../../context/Blog_Context';

function BlogDetails({ data }) {

    let { theme,theme2,fontColor,fontStyle,fontWeight ,
        authors_data, setAuthorsData,similier_data, 
        setSimilierData,trainding_data, setTrandingData}  = useContext(BlogDataContext);

    let { blog_id } = useParams();
    const location = useLocation();
    let { blogData } = location.state || {};
    let [blog, setBlog] = useState(blogData);

    console.log(data_c);


    let blog_data_c = data_c.blog_data;


    // console.log(data);
    console.log(blogData);

    let img_path = blog.filePaths.images;
    img_path = api_url + img_path

    useEffect(() => {
        let { blogData } = location.state || {};
        setBlog(blogData)
    }, [blog_id]);

    return (
        <section className={`min-h-[70vh] py-8 bg-${theme}`}>
            <div className={`mx-10 flex flex-col lg:flex-row text-${fontColor}-600 ${fontWeight} ${fontStyle} rounded-lg`}>
                {/* Blog Details Section */}
                <div className="w-full lg:w-3/4 pr-0 lg:pr-8 flex flex-col justify-between rounded-lg mr-4" style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}>

                    <div className="flex flex-col justify-center p-2 mx-2">

                        <div className='flex justify-between items-center'>
                            <h1>{blog.caption}</h1>
                            <h3 className='flex justify-between items-center'><SlCalender className='mr-2' />{new Date(blog.date_created).toLocaleDateString('en-GB')}</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={img_path} alt="Blog Thumbnail" className="max-h-[60vh] rounded-lg object-contain" />
                            <p className="mt-8 text-lg leading-relaxed">{blog.content}</p>

                            <p className="mt-8 text-lg leading-relaxed">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Quidem similique excepturi perspiciatis! Labore quasi laborum autem hic. Inventore, sit quia, ipsum unde natus aut explicabo praesentium expedita tempora deleniti, at repellat vel eius quaerat illum ipsam rerum eligendi? Dolore, iusto asperiores fuga dolorem quidem debitis esse architecto eum iure et consequuntur libero facilis. Ea quia totam omnis quas deleniti quod necessitatibus adipisci numquam reprehenderit aliquam quis iste quibusdam nemo aperiam, modi maiores explicabo laudantium eum ipsam eius unde autem aut enim cupiditate? Animi minima est illo, quibusdam omnis officia architecto possimus nostrum perferendis molestias! Natus iure alias in itaque corrupti.

                            </p>
                            
                        </div>

                        {/* Additional Blog Information */}
                        <div className="blog_additional_info text-sm text-gray-600 flex flex-col space-y-4 px-6 mt-5 w-full bg-gray-300 py-2 rounded-lg">
                            <div className="flex flex-col justify-between">
                                {/* Hashtags */}
                                <div className="blog_hashtags mb-2">
                                    {blog.hashtags.map((hashtag, index) => (
                                        <Link to={`/hashtag/${hashtag}`}>
                                            <Hashtag key={index} hashtag={hashtag} />
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-2 w-full">
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <div className="flex flex-col items-center justify-center">
                                            <button className="like-btn flex items-center justify-center">
                                                <GrLike /> <span className='ml-1'>{blog.likes}</span>
                                            </button>
                                            <span className=""> Likes</span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <button className="like-btn flex items-center justify-center">
                                                <GoComment />
                                            </button>
                                            <span className="ml-1">Comments</span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <button className="like-btn flex items-center justify-center">
                                                <CiShare1 />
                                            </button>
                                            <span className="ml-1">Share</span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <button className="like-btn flex items-center justify-center">
                                                <CiCirclePlus />
                                            </button>
                                            <span className="ml-1">Follow</span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <button className="like-btn flex items-center justify-center">
                                                <BsBookmark />
                                            </button>
                                            <span className="ml-1">Save</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

                {/* Trending blog Section */}
                <TrendingBlogs trainding_data={trainding_data}  />
            </div>

            {/* Below Blog Details */}
            <div className="mt-12">
                <PopularAuthors authors_data={authors_data} />
            </div>
            <div className="slider">
                <Silk_Slider posts={similier_data} title={"Similar Blogs"}
                    renderSlide={(post) => <BlogItemDetails data={post} />} slidesToShow={4} />

            </div>
        </section>
    );
}

export default BlogDetails;
