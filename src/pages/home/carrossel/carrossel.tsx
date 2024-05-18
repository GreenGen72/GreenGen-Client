import { useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carrossel = () => {
  const images = [
    "https://i.ibb.co/PQ6j8SN/carrossel.jpg",
    "https://i.ibb.co/TbMvTrM/carrossel3.jpg",
    "https://i.ibb.co/8KhYrsx/carrossel2.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showNavButtons, setShowNavButtons] = useState(false);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      className="relative h-96 w-lvw"
      onMouseEnter={() => setShowNavButtons(true)}
      onMouseLeave={() => setShowNavButtons(false)}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="h-full object-cover"
          />
        </div>
      ))}
      <button
        className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-secondary px-3 py-1 rounded-full shadow-md"
        onClick={goToPrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-primary" />
      </button>
      <button
        className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-secondary text-primary px-3 py-1 rounded-full shadow-md"
        onClick={goToNext}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-primary" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`h-2 w-2 rounded-full bg-primary ${
              index === activeIndex ? "bg-secondary" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carrossel;