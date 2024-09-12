import { useContext } from "react";
import { BlogDataContext } from "../../../context/Blog_Context";
import api_url from "../../../utils/utils";

const AuthorBio = ({author_data}) => {

  const { theme,theme2,fontColor,fontStyle,fontWeight } = useContext(BlogDataContext);
  

  let img_path = author_data?.userImage;
  img_path = api_url + img_path;

    return (
      <div className="p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
      style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}
      >
        <div className="md:w-1/4 mb-4 md:mb-0">
          <img src={img_path} alt="Author" className="rounded-full h-32 w-32" />
        </div>
        <div className="md:w-3/4 md:ml-6 text-center md:text-left">
          <h2 className="text-2xl">{author_data?.username}</h2>
          <p className="">Posts : 13 | Followers: 1313</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Copy Profile
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Follow
            </button>
          </div>
          <p className="mt-4">
          {author_data?.bio}
          </p>
        </div>
      </div>
    );
  };

  export default AuthorBio ;
  