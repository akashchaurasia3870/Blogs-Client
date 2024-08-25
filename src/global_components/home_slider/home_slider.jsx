import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
    };

    // console.log(slides);


    return (
        <div className="w-full mb-10 z-50">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`relative h-[40vh] md:h[50vh] lg:h-[60vh] rounded-lg bg-[${slide.theme}]`}
                    // style={{
                    //     background: slide.theme
                    // }}
                    >
                        <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-4 bg-black`}>
                            <h2 className="text-white text-2xl font-bold mb-2">{slide.title}</h2>
                            <p className="text-white text-lg">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeSlider;
