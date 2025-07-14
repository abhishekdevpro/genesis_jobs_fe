import React from "react";

// Images (replace with your own)
import cl1 from "../../assets/cv-1.png";
import cl2 from "../../assets/cv-2.jpg";
import cl3 from "../../assets/cv-3.jpg";
import cl4 from "../../assets/cv-4.jpg";
import cl5 from "../../assets/cv-1.png";


// import globe from "../../assets/world.png";
// import globe2 from "../../assets/opcity-low-world.png";
import ImageSlider from "../../ui/Slider";



// const coverLetters = [cl1, cl2, cl3, cl4, cl5,cl6,cl7,cl8];

// export default function CoverLetterSlider() {
//   return (
//     <section className="bg-white py-20 px-4 sm:px-6 lg:px-10">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
//           Looking For <span className="text-blue-600">Impressive</span> Cover
//           Letters?
//         </h2>
//         <p className="text-gray-500 max-w-2xl mx-auto mb-10">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s.
//         </p>

//         <ImageSlider
//           images={coverLetters}
//           autoPlayInterval={4000}
//           showControls={true}
//           showIndicators={true}

//         />
//       </div>
//     </section>
//   );
// }

const CoverLetterSlider = () => {
  // Sample cover letter data - replace with your actual image imports
  const coverLetterImages = [
    {
      src: cl1,
      alt: "Professional Cover Letter Template 1",
      title: "Executive Template",
      description: "Perfect for senior positions",
    },
    {
      src: cl2,
      alt: "Professional Cover Letter Template 2",
      title: "Creative Design",
      description: "Stand out with style",
    },
    {
      src: cl3,
      alt: "Professional Cover Letter Template 3",
      title: "Modern Layout",
      description: "Clean and professional",
    },
    {
      src: cl4,
      alt: "Professional Cover Letter Template 4",
      title: "Classic Format",
      description: "Traditional approach",
    },
    {
      src: cl5,
      alt: "Professional Cover Letter Template 5",
      title: "Minimalist Style",
      description: "Simple yet effective",
    },
    {
      src: cl5,
      alt: "Professional Cover Letter Template 5",
      title: "Minimalist Style",
      description: "Simple yet effective",
    },
    {
      src: cl5,
      alt: "Professional Cover Letter Template 5",
      title: "Minimalist Style",
      description: "Simple yet effective",
    },
    {
      src: cl5,
      alt: "Professional Cover Letter Template 5",
      title: "Minimalist Style",
      description: "Simple yet effective",
    },
  ];

  return (
    
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
      {/* Globe icon at top-right (hidden on small screens) */}
      

      <div className="max-w-8xl mx-auto text-center">
        <div className="flex gap-10 justify-center">
         <div className="flex flex-col gap-3">
           <h2 className="text-3xl md:text-[50px] font-bold mb-4 text-black">
          Looking For <span className="text-primary">Impressive</span> Cover
          Letters?
        </h2>
        <p className="text-[#6D6D6D] mx-auto md:w-[800px] text-wrap-balanced mb-10 px-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
         </div>
        {/* <img
        src={globe}
        alt="Globe icon"
        className="hidden lg:block  w-[98px] h-[96px] z-10"
      /> */}
        </div>


        

        <ImageSlider
          images={coverLetterImages}
          autoPlayInterval={4000}
          showControls={true}
          showIndicators={true}
        />
        {/* <div className="pt-4 pl-[29px]">
          <img
        src={globe2}
        alt="Globe icon"
        className="hidden lg:block  w-[98px] h-[96px] z-10"
      />
        </div> */}
      </div>
    </section>
  );
};

export default CoverLetterSlider;
