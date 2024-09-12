import React, { useContext } from 'react';
import api_url from '../../../utils/utils';
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom'
import { BlogDataContext } from '../../../context/Blog_Context';
const PopularAuthorCard = ({ author }) => {

    console.log(author);
    

    let { theme,theme2,fontColor,fontStyle,fontWeight ,
        authors_data, setAuthorsData,similier_data, 
        setSimilierData,trainding_data, setTrandingData}  = useContext(BlogDataContext);
    

    function themeGenerator() {
        const colors = [
            '#FF0000', // Red
            '#0000FF', // Blue
            '#00FF00', // Green
            '#FFA500', // Orange
            '#800080', // Purple
            '#4B0082', // Indigo
            '#EE82EE'  // Violet
        ];

        // Function to get a random color from the colors array
        const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

        // Generate two random colors
        const color1 = getRandomColor();
        // const color2 = getRandomColor();

        // Return a linear gradient
        // return `linear-gradient(255deg, ${color1}, ${color2})`;
        return color1
    }



    return (
        <Link className='w-full'
        to={`/blogs/${author?.user_id}`}
        >

            <div
                className={`text-${fontColor}-600 ${fontWeight} ${fontStyle} shadow-md rounded-lg p-4 flex items-center w-full relative`}
                style={{backgroundColor:themeGenerator()}}            >
                <img
                    // src={api_url + author.userImage}
                    src="http://localhost:5000/data/images/54f7c469-ba65-4798-bff1-d28b8f574028.jpeg"
                    alt={author?.username ? author.username : "Author Img"}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                    {/* <h3 className="text-xl font-bold mb-1">{author.username}</h3> */}
                    <h3 className="text-xl font-bold mb-1">{author?.username ? author.username : "Monkey D luffy"}</h3>
                    <p className="">Posts: 7</p>
                </div>
                <div className="flex items-center justify-center bg-green-500 px-2 py-1 rounded-md text-white text-xm md:text-sm lg:text-sm absolute right-2 bottom-2 cursor-pointer">
                    <span className='mx-2'>Follow</span>
                    <span className='font-extrabold text-lg md:text-lg lg:text-xl' ><IoMdAdd /></span>
                </div>
            </div>
        </Link>
    );
};

export default PopularAuthorCard;
