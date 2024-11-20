import React from 'react';
import img from '../../assets/img/img1.jpg';
const CategoryComponent = ({post}) => {
  console.log(post);
  
  return (
    <div 
      className="relative h-[8rem] w-[8rem] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.05]"
      style={{backgroundColor:post.theme}}
    >
      {/* <img 
        src={post.imgSrc} 
        alt={post.title} 
        className="w-full h-full object-cover"
      /> */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{post.title}</h3>
      </div>
    </div>
  );
}

export default CategoryComponent;
