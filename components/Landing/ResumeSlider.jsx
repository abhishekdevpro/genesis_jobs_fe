// import React from "react";
// import Resume1 from "../../pages/Home/Images/homeimage1.jpg";
// import Resume2 from "../../pages/Home/Images/homeimage2.jpg";
// import Resume3 from "../../pages/Home/Images/homeimage3.jpg";
// import Resume4 from "../../pages/Home/Images/homeimage4.jpg";

// // import globe from "../../assets/world.jpg";
// // import globe2 from "../../assets/opcity-low-world.jpg";
// import ImageSlider from "../../ui/Slider";

// const ResumeSlider = () => {
//   // Sample cover letter data - replace with your actual image imports
//   const coverLetterImages = [
//     {
//       src: Resume1,
//       alt: "Professional Cover Letter Template 1",
//       title: "Executive Template",
//       description: "Perfect for senior positions",
//     },
//     {
//       src: Resume2,
//       alt: "Professional Cover Letter Template 2",
//       title: "Creative Design",
//       description: "Stand out with style",
//     },
//     {
//       src: Resume3,
//       alt: "Professional Cover Letter Template 3",
//       title: "Modern Layout",
//       description: "Clean and professional",
//     },
//     {
//       src: Resume4,
//       alt: "Professional Cover Letter Template 4",
//       title: "Classic Format",
//       description: "Traditional approach",
//     },
//     {
//       src: Resume1,
//       alt: "Professional Cover Letter Template 5",
//       title: "Minimalist Style",
//       description: "Simple yet effective",
//     },
//     {
//       src: Resume2,
//       alt: "Professional Cover Letter Template 5",
//       title: "Minimalist Style",
//       description: "Simple yet effective",
//     },
//     {
//       src: Resume4,
//       alt: "Professional Cover Letter Template 5",
//       title: "Minimalist Style",
//       description: "Simple yet effective",
//     },
//     {
//       src: Resume2,
//       alt: "Professional Cover Letter Template 5",
//       title: "Minimalist Style",
//       description: "Simple yet effective",
//     },
//   ];

//   return (
//     <section className="bg-background py-20 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
//       <div className="max-w-8xl mx-auto text-center">
//         <div className="flex gap-10 justify-center">
//           <div className="flex flex-col gap-3 md:w-5xl mx-auto">
//             <h2 className="text-lg md:text-[48px] font-bold mb-4 text-black text-wrap-balanced">

//               Explore Our Wide Range Of{" "}
//               <span className="text-primary">Trending Templates </span>  That
//               Recruiters Love To See
//             </h2>
//             <p className="text-[#6D6D6D] mx-auto md:w-5xl text-wrap-balanced mb-10 px-4">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industrys standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and
//             </p>
//           </div>
          
//         </div>

//         <ImageSlider
//           images={coverLetterImages}
//           autoPlayInterval={4000}
//           showControls={true}
//           showIndicators={true}
//         />
       
//       </div>
//     </section>
//   );
// };

// export default ResumeSlider;
import React from "react";
import Resume1 from "../../assets/resume-1.png";
import Resume2 from "../../assets/resume-2.png";
import Resume3 from "../../assets/resume-3.png";
import Resume4 from "../../assets/resume-4.png";
import ImageSlider from "../../ui/Slider"; // Assumes this is a custom carousel component

const ResumeSlider = () => {
  const coverLetterImages = [
    {
      src: Resume1,
      alt: "Executive Template",
      title: "Executive Template",
      description: "Perfect for senior positions",
    },
    {
      src: Resume2,
      alt: "Creative Design",
      title: "Creative Design",
      description: "Stand out with style",
    },
    {
      src: Resume3,
      alt: "Modern Layout",
      title: "Modern Layout",
      description: "Clean and professional",
    },
    {
      src: Resume4,
      alt: "Classic Format",
      title: "Classic Format",
      description: "Traditional approach",
    },
    {
      src: Resume1,
      alt: "Minimalist Style",
      title: "Minimalist Style",
      description: "Simple yet effective",
    },
    {
      src: Resume2,
      alt: "Polished Look",
      title: "Polished Look",
      description: "Sleek and recruiter-friendly",
    },
    {
      src: Resume4,
      alt: "Bold Design",
      title: "Bold Design",
      description: "Make a strong impression",
    },
    {
      src: Resume2,
      alt: "Elegant Format",
      title: "Elegant Format",
      description: "Refined and readable",
    },
  ];

  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="text-lg md:text-[48px] font-bold leading-tight text-black">
            Explore Our Wide Range of{" "}
            <span className="text-primary">Trending Templates</span> That
            Recruiters Love to See
          </h2>
          <p className="text-[#6D6D6D] text-md md:text-md mt-4 leading-relaxed">
            Professionally designed templates that combine modern layouts,
            polished visuals, and ATS-friendly formatting — all crafted to
            impress hiring managers and stand out from the crowd.
          </p>
        </div>

        {/* Image Slider Component */}
        <ImageSlider
          images={coverLetterImages}
          autoPlayInterval={4000}
          showControls={true}
          showIndicators={true}
        />
      </div>
    </section>
  );
};

export default ResumeSlider;
