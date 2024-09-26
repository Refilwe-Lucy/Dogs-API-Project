/*import React, { useState } from 'react';

const slides = [
    "dogImage1.png",
    "dogImage2.png",
    "dogImage3.png", 
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex items-center justify-center">
            <button 
                onClick={prevSlide} 
                className="p-2 text-2xl bg-gray-300 rounded-lg hover:bg-gray-400">
                &lt;
            </button>
            <div className="w-64 h-40 overflow-hidden mx-4 relative">
                <img 
                    src={`/images/${slides[currentIndex]}`} 
                    alt={`Dog ${currentIndex + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500"
                />
            </div>
            <button 
                onClick={nextSlide} 
                className="p-2 text-2xl bg-gray-300 rounded-lg hover:bg-gray-400">
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
*/


