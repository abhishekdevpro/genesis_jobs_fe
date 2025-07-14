// // // Real images (update your paths if needed)

// // const steps = [
// //   {
// //     number: 1,
// //     title: "Add Resume",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
// //     image:
// //       "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
// //   },
// //   {
// //     number: 2,
// //     title: "Add Position",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
// //     image: "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
// //   },
// //   {
// //     number: 3,
// //     title: "Run Interview",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
// //     image: "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
// //   },
// //   {
// //     number: 4,
// //     title: "Interview Report",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
// //     image: "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
// //   },
// // //   {
// // //     number: 5,
// // //     title: "Download",
// // //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .",
// // //     image: step5,
// // //   },
// // ];

// // export default function ResumeSteps() {
// //   return (
// //     <section className="bg-white py-20 ">
// //       <div className=" mx-auto">
// //         {/* Section Header */}
// //         <h2
// //           className="text-[40px] md:text-[50px] font-bold text-center mb-16 text-black"
// //           style={{
// //             lineHeight: "55px",
// //           }}
// //         >
// //           Let Your <span className="text-primary">Resume Stand Ahead</span> Of{" "}
// //           <br />
// //           Competition With Our Robust AI
// //         </h2>

// //         {/* Steps */}
// //         <div className="space-y-24">
// //           {steps.map((step, index) => {
// //             const isEven = index % 2 !== 1;
// //             return (
// //               <div
// //                 key={step.number}
// //                 className={`flex flex-col md:flex-row justify-center md:h-[500px] items-center gap-5 md:gap-10   ${
// //                   isEven ? "md:flex-row-reverse  " : ""
// //                 }`}
// //               >
// //                 {/* Text Box */}
// //                 <div className="md:w-1/2 w-full bg-[#F4F8FF]">
// //                   <div className=" p-4 md:py-[48px] rounded-sm shadow-sm h-full w-full ">
// //                     <div className="flex items-center mb-4">
// //                       <div className="h-24 w-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-5xl">
// //                         {step.number}
// //                       </div>
// //                     </div>
// //                     <h3 className="text-3xl sm:text-2xl font-semibold text-black mb-3">
// //                       {step.title}
// //                     </h3>
// //                     <p className="text-xl text-gray-600 leading-relaxed w-full">
// //                       {step.desc}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Image */}
// //                 <div className="md:w-1/2 w-full flex justify-center">
// //                   <img
// //                     src={step.image}
// //                     alt={`Step ${step.number}`}
// //                     className="w-full h-[500px] object-contain"
// //                   />
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// const steps = [
//   {
//     number: 1,
//     title: "Add Resume",
//     desc: "Upload your resume and cover letter to customize your AI experience for maximum relevance.",
//     image:
//       "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
//   },
//   {
//     number: 2,
//     title: "Add Position",
//     desc: "Tell us your target position and let the AI tailor your preparation based on job expectations.",
//     image:
//       "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
//   },
//   {
//     number: 3,
//     title: "Run Interview",
//     desc: "Get real-time AI assistance, questions, and feedback during your mock interview sessions.",
//     image:
//       "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
//   },
//   {
//     number: 4,
//     title: "Interview Report",
//     desc: "Receive a detailed performance report with highlights, improvement areas, and feedback.",
//     image:
//       "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
//   },
// ];

// export default function InterviewSteps() {
//   return (
//     <section className="bg-white py-20 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <h2 className="text-xl md:text-[52px] font-bold text-center mb-16 text-black leading-snug">
//           Let Your <span className="text-primary">Resume Stand Ahead</span> Of <br />
//           Competition With Our Robust AI
//         </h2>

//         {/* Steps */}
//         <div className="space-y-20 md:space-y-32">
//           {steps.map((step, index) => {
//             const isEven = index % 2 !== 0;
//             return (
//               <div
//                 key={step.number}
//                 className={`flex flex-col md:flex-row ${
//                   isEven ? "md:flex-row-reverse" : ""
//                 } items-center gap-4 md:gap-8`}
//               >
//                 {/* Image */}
//                 <div className="md:w-1/2 w-full flex justify-center">
//                   <img
//                     src={step.image}
//                     alt={`Step ${step.number}`}
//                     className="w-full h-[400px] md:h-[500px] object-contain rounded-xl"
//                   />
//                 </div>

//                 {/* Text Box */}
//                 <div className="md:w-1/2 w-full bg-[#F4F8FF] rounded-xl p-6 md:p-10 shadow-sm">
//                   <div className="flex items-center mb-6">
//                     <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-primary text-white flex items-center justify-center text-3xl md:text-5xl font-bold">
//                       {step.number}
//                     </div>
//                   </div>
//                   <h3 className="text-[24px] md:text-[32px] font-semibold text-black mb-4">
//                     {step.title}
//                   </h3>
//                   <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
//                     {step.desc}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
import { FileText, Briefcase, Mic, BarChart2 } from "lucide-react";

const steps = [
  {
    title: "Add Resume",
    desc: "Upload your resume and cover letter to customize your AI experience for maximum relevance.",
    icon: <FileText className="w-12 h-12 text-primary" />,
    image:
      "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
  },
  {
    title: "Add Position",
    desc: "Tell us your target position and let the AI tailor your preparation based on job expectations.",
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    image:
      "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
  },
  {
    title: "Run Interview",
    desc: "Get real-time AI assistance, questions, and feedback during your mock interview sessions.",
    icon: <Mic className="w-12 h-12 text-primary" />,
    image:
      "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
  },
  {
    title: "Interview Report",
    desc: "Receive a detailed performance report with highlights, improvement areas, and feedback.",
    icon: <BarChart2 className="w-12 h-12 text-primary" />,
    image:
      "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
  },
];

export default function ResumeSteps() {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-[48px] font-bold text-center mb-16 text-black leading-snug">
          {/* AI interview assistant for real-time support.  */}
           AI <span className="text-primary">interview </span>
          assistant for real-time support.
        </h2>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div
                key={step.title}
                className={`flex flex-col md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                } items-stretch gap-4 md:gap-6`}
              >
                {/* Image */}
                <div className="md:w-1/2 w-full flex justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
                  />
                </div>

                {/* Text Box */}
                <div className="md:w-1/2 w-full bg-[#F4F8FF] rounded-xl p-6 md:p-10 shadow-sm flex flex-col justify-center h-[400px] md:h-[500px]">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-[24px] md:text-[32px] font-semibold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
