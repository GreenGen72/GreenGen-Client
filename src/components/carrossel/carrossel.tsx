import React, { useState } from 'react';

const Carrossel = () => {
    const images = [
        'https://via.placeholder.com/600x300?text=Image+1',
        'https://via.placeholder.com/600x300?text=Image+2',
        'https://via.placeholder.com/600x300?text=Image+3',
        'https://via.placeholder.com/600x300?text=Image+4',
        'https://via.placeholder.com/600x300?text=Image+5',
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const goToIndex = (index) => {
        setActiveIndex(index);
    };

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        // <section className="flex flex-col h-96 w-screen" style={{ border: '1px solid #000' }}>
        <section className="relative h-96 w-screen">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity ${
                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover"/>
                </div>
            ))}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded shadow-md"
                onClick={goToPrev}>
                Prev
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded shadow-md"
                onClick={goToNext}>
                Next
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToIndex(index)}
                        className={`h-2 w-2 rounded-full bg-gray-800 ${index === activeIndex ? 'bg-gray-500' : ''}`}
                    />
                ))}
            </div>
        </section>
        // </section>
    );
};

export default Carrossel;