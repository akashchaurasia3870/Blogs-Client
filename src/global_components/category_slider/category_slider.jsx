import React from 'react';
import CategoryComponent from '../category_filter/category_filter';
import Silk_Slider from '../../global_components/silk_slider/slider'
import img from '../../assets/img/img1.jpg';
const CategorySlider = () => {
  
  const categories = [
    {
      title: 'Nature',
      imgSrc: img,
      description: 'Beautiful nature scenes',
    },
    {
      title: 'Tech',
      imgSrc: img,
      description: 'Latest in tech',
    },
    {
      title: 'Travel',
      imgSrc: img,
      description: 'Explore new destinations',
    },
    {
      title: 'Food',
      imgSrc: img,
      description: 'Delicious culinary delights',
    },
    {
      title: 'Fashion',
      imgSrc: img,
      description: 'Trendy styles and designs',
    },
    {
      title: 'Sports',
      imgSrc: img,
      description: 'Exciting sports activities',
    },
    {
      title: 'Art',
      imgSrc: img,
      description: 'Creative artistic expressions',
    },
    {
      title: 'AI',
      imgSrc: img,
      description: 'Capturing moments in time',
    },
    {
      title: 'Music',
      imgSrc: img,
      description: 'Melodies and rhythms',
    },
    {
      title: 'Fitness',
      imgSrc: img,
      description: 'Staying fit and healthy',
    },
    {
      title: 'Movies',
      imgSrc: img,
      description: 'Cinema and entertainment',
    },
    {
      title: 'Books',
      imgSrc: img,
      description: 'Literature and reading',
    },
    {
      title: 'Science',
      imgSrc: img,
      description: 'Discoveries and innovations',
    },
    {
      title: 'Gaming',
      imgSrc: img,
      description: 'Interactive digital adventures',
    },
    {
      title: 'Architect',
      imgSrc: img,
      description: 'Innovative building designs',
    }
  ];

  return (
    <div className="slider">
        <Silk_Slider posts={categories} title={""}
        renderSlide={(post) => <CategoryComponent post={post} />} />
    </div>
  );
}

export default CategorySlider;
