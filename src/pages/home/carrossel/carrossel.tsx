import { useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carrossel = () => {
  const images = [
    "https://raw.githubusercontent.com/GreenGen72/GreenGen-Client/4da3710cf113bc13eaa041bcbec11102fa662214/src/assets/banner_sustentabilidade_e_economia.svg",
    "https://raw.githubusercontent.com/GreenGen72/GreenGen-Client/main/src/assets/banner_investimento_garantia.png",
    "https://raw.githubusercontent.com/GreenGen72/GreenGen-Client/4da3710cf113bc13eaa041bcbec11102fa662214/src/assets/banner_eco_ofertas.svg",
    "https://raw.githubusercontent.com/GreenGen72/GreenGen-Client/main/src/assets/banner_redefinindo_futuro_energia.png",
    "https://raw.githubusercontent.com/GreenGen72/GreenGen-Client/main/src/assets/banner_frete_fixo.png",
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
      className="relative h-96 w-full max-w-6xl mx-auto"
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
          <div className="flex justify-center items-center h-full mx-2 mt-7">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover max-w-full h-auto"
            />
          </div>
        </div>
      ))}
      {showNavButtons && (
        <>
          <button
            className="absolute top-1/2 left-auto transform -translate-y-1/2 bg-secondary px-3 py-1 rounded-full shadow-md"
            onClick={goToPrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-primary" />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-secondary text-primary px-3 py-1 rounded-full shadow-md"
            onClick={goToNext}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-primary" />
          </button>
        </>
      )}
      {showNavButtons && (
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-3 border-opacity-25 rounded-full p-1 px-3 bg-neutral-100 bg-opacity-15">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-2 w-2 rounded-full ${
                index === activeIndex ? "bg-secondary" : "bg-white"
              } shadow-md`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Carrossel;
