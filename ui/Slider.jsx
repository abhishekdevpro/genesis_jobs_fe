
// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// const ImageSlider = ({
//   images = [],
//   autoPlayInterval = 3000,
//   showControls = true,
//   showIndicators = true,
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const [imagesPerSlide, setImagesPerSlide] = useState(4);

//   // Handle screen resize to adjust images per slide
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setImagesPerSlide(1);
//       } else if (width < 1024) {
//         setImagesPerSlide(2);
//       } else {
//         setImagesPerSlide(4);
//       }
//     };

//     handleResize(); // on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const totalSlides = Math.ceil(images.length / imagesPerSlide);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isPlaying || isPaused || images.length <= imagesPerSlide) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1
//       );
//     }, autoPlayInterval);

//     return () => clearInterval(interval);
//   }, [isPlaying, isPaused, autoPlayInterval, totalSlides, imagesPerSlide]);

//   // Navigation handlers
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1
//     );
//   };

//   const togglePlayPause = () => setIsPlaying((prev) => !prev);
//   const handleMouseEnter = () => setIsPaused(true);
//   const handleMouseLeave = () => setIsPaused(false);

//   // Get images for the current slide
//   const getCurrentImages = () =>
//     images.slice(
//       currentIndex * imagesPerSlide,
//       currentIndex * imagesPerSlide + imagesPerSlide
//     );

//   if (images.length === 0) {
//     return (
//       <div className="w-full max-w-7xl mx-auto p-6">
//         <div className="text-center py-12 bg-gray-100 rounded-lg">
//           <p className="text-gray-500">No images to display</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-8xl mx-auto p-6">
//       <div
//         className="relative overflow-hidden group"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Image Grid */}
//         <div
//           className={`grid gap-6 ${
//             imagesPerSlide === 1
//               ? "grid-cols-1"
//               : imagesPerSlide === 2
//               ? "grid-cols-2"
//               : "grid-cols-4"
//           }`}
//         >
//           {getCurrentImages().map((image, idx) => (
//             <div
//               key={`${currentIndex}-${idx}`}
//               className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
//             >
//               <div className="aspect-[3/4]">
//                 <img
//                   src={image.src}
//                   alt={image.alt || `Image ${idx}`}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Controls */}
//         {/* {showControls && totalSlides > 1 && (
//           <>
//             <button
//               onClick={goToPrevious}
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-700" />
//             </button>

//             <button
//               onClick={goToNext}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-700" />
//             </button>

//             <button
//               onClick={togglePlayPause}
//               className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:scale-105 transition"
//             >
//               {isPlaying ? (
//                 <Pause className="w-5 h-5 text-gray-700" />
//               ) : (
//                 <Play className="w-5 h-5 text-gray-700" />
//               )}
//             </button>
//           </>
//         )} */}
//       </div>

//       {/* Indicators */}
//       {showIndicators && totalSlides > 1 && (
//         <div className="flex justify-center mt-6 space-x-2">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                 index === currentIndex
//                   ? "bg-primary scale-125"
//                   : "bg-gray-300 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageSlider;


import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const ImageSlider = ({
  images = [],
  autoPlayInterval = 3000,
  showControls = true,
  showIndicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setImagesPerSlide(1);
      } else if (width < 1024) {
        setImagesPerSlide(2);
      } else {
        setImagesPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  useEffect(() => {
    if (!isPlaying || isPaused || images.length <= imagesPerSlide) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, autoPlayInterval, totalSlides, imagesPerSlide]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1
    );
  };

  const togglePlayPause = () => setIsPlaying((prev) => !prev);
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const getCurrentImages = () =>
    images.slice(
      currentIndex * imagesPerSlide,
      currentIndex * imagesPerSlide + imagesPerSlide
    );

  if (images.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-gray-500">No images to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto p-6">
      <div
        className="relative overflow-hidden group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`grid gap-6 ${
            imagesPerSlide === 1
              ? "grid-cols-1"
              : imagesPerSlide === 2
              ? "grid-cols-2"
              : "grid-cols-4"
          }`}
        >
          {getCurrentImages().map((image, idx) => (
            <div
              key={`${currentIndex}-${idx}`}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[3/4] relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt || `Image ${idx}`}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {showControls && totalSlides > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:scale-105 transition"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-gray-700" />
              ) : (
                <Play className="w-5 h-5 text-gray-700" />
              )}
            </button> */}
          </>
        )}
      </div>

      {showIndicators && totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
