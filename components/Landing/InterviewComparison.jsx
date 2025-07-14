
// import { CheckCircle, XCircle, ArrowRight, Sparkles } from "lucide-react";
// import Button from "../../ui/Button";

// export default function InterviewComparison() {
//   return (
//     <section className="bg-background py-24 px-4 md:px-12 max-w-8xl mx-auto relative overflow-hidden">
      

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
//         {/* Left Heading */}
//         <div className="space-y-8 text-center lg:text-left">
          
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
//             Make your next job interview{" "}
//             <span className="relative inline-block">
//               <span className="bg-primary bg-clip-text text-transparent">
//                 stress-free
//               </span>
//               <div className="absolute -bottom-2 left-0 w-full h-3  rounded-full opacity-30"></div>
//             </span>{" "}
//             thanks to AI
//           </h2>

//           <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
//             Transform your interview experience from anxiety-inducing to
//             confidence-building with AI-powered preparation tools.
//           </p>
//         </div>

//         {/* Right Comparison Section */}
//         <div className="w-full">
//           {/* Titles */}
//           <div className="grid grid-cols-3 text-center mb-8">
//             <div className="text-lg font-bold text-red-600 flex items-center justify-center gap-2">
//               <XCircle className="w-5 h-5" />
//               Without AI
//             </div>
//             <div></div>
//             <div className="text-lg font-bold text-green-600 flex items-center justify-center gap-2">
//               <CheckCircle className="w-5 h-5" />
//               With AI
//             </div>
//           </div>

//           {/* Comparison Rows */}
//           <div className="space-y-6">
//             {[
//               {
//                 from: "Unprepared & scattered",
//                 to: "Organized & strategic",
//                 delay: "0ms",
//               },
//               {
//                 from: "Nervous & hesitant",
//                 to: "Confident & articulate",
//                 delay: "200ms",
//               },
//               {
//                 from: "Ghosted by employers",
//                 to: "Multiple job offers",
//                 delay: "400ms",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="grid grid-cols-3 items-center gap-4 group"
//                 style={{ animationDelay: item.delay }}
//               >
//                 {/* Without AI */}
//                 <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 text-red-700 py-5 px-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//                   <XCircle className="w-5 h-5 flex-shrink-0" />
//                   <span className="text-center">{item.from}</span>
//                 </div>

//                 {/* Arrow */}
//                 <div className="flex justify-center">
//                   <div className="bg-white p-3 rounded-full shadow-md border-2 border-gray-200 group-hover:border-blue-300 transition-all duration-300">
//                     <ArrowRight className="text-gray-500 w-6 h-6 group-hover:text-blue-500 transition-colors duration-300" />
//                   </div>
//                 </div>

//                 {/* With AI */}
//                 <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-5 px-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <CheckCircle className="w-5 h-5 flex-shrink-0 relative z-10" />
//                   <span className="text-center relative z-10">{item.to}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="mt-12 text-center">
//             <Button
//               variant="primary"
//               size="lg"
//               className="px-8 py-3 flex items-center justify-center gap-2 mx-auto"
//             >
//               <Sparkles className="w-5 h-5" />
//               Start Your AI Interview Prep
//               <ArrowRight className="w-5 h-5" />
//             </Button>

//             {/* <p className="text-sm text-gray-500 mt-4">
//               Join thousands of successful candidates
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { CheckCircle, XCircle, ArrowRight, Sparkles } from "lucide-react";
import Button from "../../ui/Button";

export default function InterviewComparison() {
  return (
    <section className="bg-background py-20 px-4 md:px-12 max-w-8xl mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Heading */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Make your next job interview{" "}
            <span className="relative inline-block">
              <span className="bg-primary bg-clip-text text-transparent">
                stress-free
              </span>
            </span>{" "}
            thanks to AI
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Transform your interview experience from anxiety-inducing to
            confidence-building with AI-powered preparation tools.
          </p>
        </div>

        {/* Right Comparison Section */}
        <div className="w-full">
          {/* Titles */}
          <div className="grid grid-cols-3 text-center mb-6 text-sm sm:text-base">
            <div className="text-red-600 font-semibold flex items-center justify-center gap-1 sm:gap-2">
              <XCircle className="w-5 h-5" />
              Without AI
            </div>
            <div></div>
            <div className="text-green-600 font-semibold flex items-center justify-center gap-1 sm:gap-2">
              <CheckCircle className="w-5 h-5" />
              With AI
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {[
              {
                from: "Unprepared & scattered",
                to: "Organized & strategic",
              },
              {
                from: "Nervous & hesitant",
                to: "Confident & articulate",
              },
              {
                from: "Ghosted by employers",
                to: "Multiple job offers",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4"
              >
                {/* Without AI */}
                <div className="bg-red-100 border border-red-200 text-red-700 py-4 px-3 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 shadow-sm hover:shadow-md transition-all duration-200">
                  <XCircle className="w-5 h-5" />
                  {item.from}
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1 sm:my-0">
                  <div className="bg-white p-2 rounded-full shadow border border-gray-200 hover:border-blue-300 transition">
                    <ArrowRight className="text-gray-500 w-5 h-5 hover:text-blue-500" />
                  </div>
                </div>

                {/* With AI */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-4 px-3 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 shadow-sm hover:shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <CheckCircle className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{item.to}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <Button
              variant="primary"
            //   size="lg"
              className="px-6 py-3 text-base sm:text-lg flex items-center justify-center gap-2 mx-auto"
            >
              <Sparkles className="w-5 h-5" />
              Start Your AI Interview Prep
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
