// // import React, { useState, useRef, createContext, useEffect } from "react";
// // import Language from "../components/form/Language";
// // import axios from "axios";
// // import Meta from "../components/meta/Meta";
// // import FormCP from "../components/form/FormCP";
// // import dynamic from "next/dynamic";
// // import DefaultResumeData from "../components/utility/DefaultResumeData";
// // import SocialMedia from "../components/form/SocialMedia";
// // import WorkExperience from "../components/form/WorkExperience";
// // import Skill from "../components/form/Skill";
// // import PersonalInformation from "../components/form/PersonalInformation";
// // import Summary from "../components/form/Summary";
// // import Projects from "../components/form/Projects";
// // import Education from "../components/form/Education";
// // import Certification from "../components/form/certification";
// // import ColorPicker from "./ColorPicker";
// // import ColorPickers from "./ColorPickers";
// // import Preview from "../components/preview/Preview";
// // import TemplateSelector from "../components/preview/TemplateSelector";
// // import { PDFExport } from "@progress/kendo-react-pdf";
// // import LoadUnload from "../components/form/LoadUnload";
// // import MyResume from "./dashboard/MyResume";
// // import { useRouter } from "next/router";
// // import Sidebar from "./dashboard/Sidebar";
// // import { toast } from "react-toastify";
// // import LoaderButton from "../components/utility/LoaderButton";
// // import useLoader from "../hooks/useLoader";
// // import Modal from "./adminlogin/Modal";

import MobileBuilder from "./mobilebuilder";
import WebBuilder from "./webbuilder";

// // const ResumeContext = createContext(DefaultResumeData);

// // const Print = dynamic(() => import("../components/utility/WinPrint"), {
// //   ssr: false,
// // });

// // export default function Builder({ onClose }) {
// //   const [resumeData, setResumeData] = useState(DefaultResumeData);
// //   const [formClose, setFormClose] = useState(false);
// //   const [currentSection, setCurrentSection] = useState(0);
// //   const [selectedFont, setSelectedFont] = useState("Ubuntu");
// //   const [headerColor, setHeaderColor] = useState("");
// //   const [backgroundColorss, setBgColor] = useState("");
// //   const [selectedTemplate, setSelectedTemplate] = useState("template1");
// //   const [isFinished, setIsFinished] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [token, setToken] = useState(null);
// //   const [resumeId, setResumeId] = useState(null);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const router = useRouter();
// //   const pdfExportComponent = useRef(null);
// //   const [isLoading, handleAction] = useLoader();
// //   const {PayerID } = router.query
// //   console.log(PayerID,"PayerID");

// //   useEffect(() => {
// //     if (typeof window !== "undefined") {
// //       const storedToken = localStorage.getItem("token");
// //       setToken(storedToken);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const path = window.location.pathname;
// //     const id = path.split("/").pop();
// //     setResumeId(id);
// //   }, []);

// //   const sections = [
// //     { label: "Personal Details", component: <PersonalInformation /> },
// //     { label: "Social Links", component: <SocialMedia /> },
// //     { label: "Summary", component: <Summary /> },
// //     { label: "Education", component: <Education /> },
// //     { label: "Experience", component: <WorkExperience /> },
// //     { label: "Projects", component: <Projects /> },
// //     {
// //       label: "Skills",
// //       component: Array.isArray(resumeData?.skills) ? (
// //         resumeData.skills.map((skill, index) => (
// //           <Skill title={skill.title} key={index} />
// //         ))
// //       ) : (
// //         <p>No skills available</p>
// //       ),
// //     },
// //     { label: "Languages", component: <Language /> },
// //     { label: "Certifications", component: <Certification /> },
// //   ];

// //   const handleProfilePicture = (e) => {
// //     const file = e.target.files[0];
// //     if (file instanceof Blob) {
// //       const reader = new FileReader();
// //       reader.onload = (event) => {
// //         setResumeData({ ...resumeData, profilePicture: event.target.result });
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     setResumeData({ ...resumeData, [e.target.name]: e.target.value });
// //   };

// //   const handleNext = () => {
// //     if (currentSection === sections.length - 1) {
// //       setIsFinished(true);
// //     } else {
// //       setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
// //     }
// //   };

// //   const handlePrevious = () => {
// //     setCurrentSection((prev) => Math.max(prev - 1, 0));
// //   };

// //   const handleSectionClick = (index) => {
// //     setCurrentSection(index);
// //     setIsMobileMenuOpen(false);
// //   };

// //   const handleFontChange = (e) => {
// //     setSelectedFont(e.target.value);
// //   };

// //   const nextSection = () => {
// //     if (currentSection < sections.length - 1) {
// //       handleSectionClick(currentSection + 1);
// //     }
// //   };

// //   const prevSection = () => {
// //     if (currentSection > 0) {
// //       handleSectionClick(currentSection - 1);
// //     }
// //   };

// //   const pdfExportOptions = {
// //     paperSize: "A4",
// //     fileName: "resume.pdf",
// //     author: resumeData.firstName + " " + resumeData.lastName,
// //     creator: "ATSResume Builder",
// //     date: new Date(),
// //     scale: 0.7,
// //     forcePageBreak: ".page-break",
// //   };

  // const downloadAsPDF = async () => {
  //   const amount = 49; // Fixed price

  //   try {
  //     // Make the payment API call
  //     const payload = {
  //       amount,
  //       ResumeId: resumeId, // Make sure resumeId is defined in your component
  //       Token: token || '' // Make sure token is defined in your component
  //     };

  //     const response = await axios.post(
  //       'https://api.resumeintellect.com/api/user/paypal/create-payment',
  //       payload,
  //       {
  //         headers: {
  //            Authorization:token,
  //           'Content-Type': 'application/json' }
  //       }
  //     );

  //     const data = response.data;
  //     console.log(data,"data");
  //     if (data && data.data) {
  //       // Store the order ID for later verification if needed
  //       const orderId = data.order_id;
  //       localStorage.setItem("orderid", orderId);

  //       // Redirect the user to PayPal URL to complete payment
  //       if (data.data) {
  //         window.location.href = data.data; // Redirect to PayPal
  //       } else {
  //         console.error("Payment URL not found");
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Payment Error:', error);
  //     // Handle error (show error message to user)
  //   }
  // };

// //   useEffect(() => {
// //     if (PayerID) {
// //       verifyPayment();
// //     }
// //   });
// //   const verifyPayment = async () => {
// //     try {
// //       const orderId = localStorage.getItem("orderid");
// //       const token = localStorage.getItem("token");

// //       if (orderId && token && PayerID) {
// //         const response = await axios.get(
// //           `https://api.resumeintellect.com/api/user/paypal/verify-order?orderid=${orderId}`,
// //           {
// //             headers: {
// //               Authorization: token,
// //               'Content-Type': 'application/json'
// //             }
// //           }
// //         );

// //         if (response.data.status === "success") {
// //           setPaymentVerified(true);
// //           toast.success("Payment verified successfully!");

// //           localStorage.removeItem("orderid");

// //           // If verification is successful, trigger PDF download
// //           if (pdfExportComponent.current) {
// //             pdfExportComponent.current.save();
// //           }
// //         } else {
// //           toast.error("Payment verification failed. Please try again.");
// //           router.push('/payment-failed')
// //         }
// //       }
// //     } catch (error) {
// //       console.error('Payment Verification Error:', error);
// //       toast.error(error?.response?.data?.message || "Payment verification failed");
// //       router.push('/payment-failed')
// //     }
// //   };

// //   const handleFinish = async () => {
// //     if (!resumeData) return;

// //     const templateData = {
// //       templateData: {
// //         name: resumeData.name || "",
// //         position: resumeData.position || "",
// //         contactInformation: resumeData.contact || "",
// //         email: resumeData.email || "",
// //         address: resumeData.address || "",
// //         profilePicture: resumeData.profilePicture || "",
// //         socialMedia:
// //           resumeData.socialMedia?.map((media) => ({
// //             socialMedia: media.platform || "",
// //             link: media.link || "",
// //           })) || [],
// //         summary: resumeData.summary || "",
// //         education:
// //           resumeData.education?.map((edu) => ({
// //             school: edu.school || "",
// //             degree: edu.degree || "",
// //             startYear: edu.startYear || "",
// //             endYear: edu.endYear || "",
// //           })) || [],
// //         workExperience:
// //           resumeData.workExperience?.map((exp) => ({
// //             company: exp.company || "",
// //             position: exp.position || "",
// //             description: exp.description || "",
// //             KeyAchievements: Array.isArray(exp.keyAchievements)
// //               ? exp.keyAchievements
// //               : [exp.keyAchievements || ""],
// //             startYear: exp.startYear || "",
// //             endYear: exp.endYear || "",
// //           })) || [],
// //         projects:
// //           resumeData.projects?.map((project) => ({
// //             title: project.title || "",
// //             link: project.link || "",
// //             description: project.description || "",
// //             keyAchievements: Array.isArray(project.keyAchievements)
// //               ? project.keyAchievements
// //               : [project.keyAchievements || ""],
// //             startYear: project.startYear || "",
// //             endYear: project.endYear || "",
// //             name: project.name || "",
// //           })) || [],
// //         skills: Array.isArray(resumeData.skills)
// //           ? resumeData.skills.map((skill) => ({
// //               title: skill.title || "",
// //               skills: skill.skills || [],
// //             }))
// //           : [],
// //         languages: resumeData.languages || [],
// //         certifications: resumeData.certifications || [],
// //         // Add template information
// //         templateDetails: {
// //           templateId: selectedTemplate,
// //           backgroundColor: backgroundColorss || "",
// //           font: selectedFont || "Ubuntu"
// //         }
// //       },
// //     };
// //    console.log(templateData,"templateData");
// //     await handleAction(async () => {
// //       try {
// //         const id = router.query.id || localStorage.getItem("resumeId");
// //         if (!id) {
// //           console.error("Resume ID not found.");
// //           return;
// //         }

// //         const url = `https://api.resumeintellect.com/api/user/resume-update/${id}`;
// //         const response = await axios.put(url, templateData, {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: token,
// //           },
// //         });

// //         console.log("Resume updated successfully:", response.data);
// //         if (response.data.code === 200 || response.data.status === "success") {
// //           toast.success(response.data.message || "Resume saved Successfully");
// //         } else {
// //           toast.error(response.data.error || "Error while saving the Resume");
// //         }
// //       } catch (error) {
// //         toast.error(error?.message || "Error !!");
// //         console.error("Error updating resume:", error);
// //       }
// //     });
// //   };
// //   const MobileNavigation = () => (
// //     <div className="fixed px-2 bottom-0 left-0 right-0 bg-white shadow-lg py-4 md:hidden">
// //       <div className="flex justify-between items-center">
// //         <button
// //           onClick={handlePrevious}
// //           disabled={currentSection === 0}
// //           className="px-4 py-2 bg-blue-950 text-white rounded-lg disabled:opacity-50"
// //         >
// //           Previous
// //         </button>
// //         <span className="text-sm font-medium">
// //           {sections[currentSection].label}
// //         </span>
// //         <button
// //           onClick={handleNext}
// //           className="px-4 py-2 bg-yellow-500 text-black rounded-lg"
// //         >
// //           {currentSection === sections.length - 1 ? "Finish" : "Next"}
// //         </button>
// //       </div>
// //     </div>
// //   );

// //   // Mobile Menu Component
// //   const MobileMenu = () => (
// //     <div className="md:hidden">
// //       {/* <button
// //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //         className="fixed top-4 right-4 z-50 bg-blue-950 text-white px-4 py-2 rounded-lg"
// //       >
// //         {isMobileMenuOpen ? "✕" : "☰"}
// //       </button> */}

// //       {isMobileMenuOpen && (
// //         <div className="fixed inset-0 bg-white z-40 p-4 pt-16">
// //           <div className="overflow-y-auto h-full">
// //             {sections.map((section, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => handleSectionClick(index)}
// //                 className={`w-full p-3 mb-2 rounded-lg text-left ${
// //                   currentSection === index
// //                     ? "bg-blue-950 text-white"
// //                     : "bg-gray-100 text-blue-950"
// //                 }`}
// //               >
// //                 {section.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// //   console.log(resumeData,"Resumedata");

// //   return (
// //     <ResumeContext.Provider
// //       value={{
// //         resumeData,
// //         setResumeData,
// //         handleProfilePicture,
// //         handleChange,
// //         headerColor,
// //         backgroundColorss,
// //       }}
// //     >
// //       <Meta
// //         title="ATSResume | Get hired with an ATS-optimized resume"
// //         description="ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes..."
// //         keywords="ATS-friendly, Resume optimization..."
// //       />

// //       <div className="min-h-screen bg-gray-50">
// //         {/* Mobile Components */}
// //         <MobileMenu />

// //         {!isFinished ? (

// //           <div className="min-h-screen bg-gray-50 flex flex-col">
// //            <LoadUnload/>
// //            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
// //         <MyResume  />
// //           </Modal>
// //             {/* Form Navigation Bar */}
// //             <div className="w-full bg-gray-200 p-4 shadow-sm">
// //               <div className="hidden md:flex flex-col lg:flex-row items-center justify-between gap-4">
// //                 {/* Navigation Buttons */}
// //                 <div className="flex w-full lg:w-auto gap-4">
// //                   <button
// //                     type="button"
// //                     onClick={handlePrevious}
// //                     disabled={currentSection === 0}
// //                     className="w-40 h-10 rounded-lg bg-blue-950 text-white font-medium transition hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
// //                   >
// //                     Previous
// //                   </button>
// //                   <button
// //                     type="button"
// //                     onClick={handleNext}
// //                     className="w-40 h-10 rounded-lg bg-yellow-500 text-black font-medium transition hover:bg-yellow-400"
// //                   >
// //                     {currentSection === sections.length - 1 ? "Finish" : "Next"}
// //                   </button>
// //                 </div>

// //                 {/* Controls Group */}
// //                 <div className="hidden lg:flex items-center gap-4">
// //                   <select
// //                     value={selectedFont}
// //                     onChange={handleFontChange}
// //                     className="w-40 h-10 rounded-lg border border-blue-800 px-4 font-bold text-blue-800 bg-white focus:ring-2 focus:ring-blue-800"
// //                   >
// //                     <option value="Ubuntu">Ubuntu</option>
// //                     <option value="Calibri">Calibri</option>
// //                     <option value="Georgia">Georgia</option>
// //                     <option value="Roboto">Roboto</option>
// //                     <option value="Poppins">Poppins</option>
// //                   </select>

// //                   <div className="flex items-center gap-4">
// //                     <ColorPicker
// //                       selectedColor={headerColor}
// //                       onChange={setHeaderColor}
// //                     />
// //                     <ColorPickers
// //                       selectmultiplecolor={backgroundColorss}
// //                       onChange={setBgColor}
// //                     />
// //                     <TemplateSelector
// //                       selectedTemplate={selectedTemplate}
// //                       setSelectedTemplate={setSelectedTemplate}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Sticky Top Navigation */}
// //             <div className="sticky top-0 z-10 w-full bg-white shadow-sm">
// //               <div className="hidden md:flex justify-center items-center p-4">
// //                 <nav className="bg-gray-100 rounded-lg p-2">
// //                   <div className="flex items-center">
// //                     <button
// //                       onClick={() => prevSection()}
// //                       className="p-2 hover:bg-gray-200 rounded-lg hidden md:block"
// //                       disabled={currentSection === 0}
// //                     >
// //                       {/* Chevron Left Icon Here */}
// //                     </button>

// //                     <div className="flex-1 overflow-x-auto scrollbar-hide ">
// //                       <ul className="flex flex-row gap-3 items-center py-2 px-4  ">
// //                         {sections.map((section, index) => (
// //                           <li
// //                             key={index}
// //                             className={`px-4 py-2 cursor-pointer transition rounded-lg border-2 ${
// //                               currentSection === index
// //                                 ? "border-blue-800 font-semibold bg-blue-950 text-white"
// //                                 : "border-blue-800 bg-white text-blue-800 hover:bg-blue-50"
// //                             }`}
// //                             onClick={() => handleSectionClick(index)}
// //                           >
// //                             {section.label}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>

// //                     <button
// //                       onClick={() => nextSection()}
// //                       className="p-2 hover:bg-gray-200 rounded-lg hidden md:block"
// //                       disabled={currentSection === sections.length - 1}
// //                     >
// //                       {/* Chevron Right Icon Here */}
// //                     </button>
// //                   </div>
// //                 </nav>
// //               </div>
// //             </div>

// //             {/* Main Content */}
// //             <div className="flex flex-col md:flex-row flex-grow ">
// //               {/* Sidebar */}
// //               <aside className="hidden md:block w-64 min-h-screen border-r bg-gray-100">
// //                 <div className="sticky top-20 p-4">
// //                   <Sidebar />
// //                 </div>
// //               </aside>

// //               {/* Form Content */}
// //               <main className="flex-1 max-w-2xl mx-auto md:p-4">
// //                 <form>{sections[currentSection].component}</form>
// //               </main>

// //               {/* Preview Panel */}
// //               <aside className="hidden md:block w-1/2 min-h-screen border-l bg-gray-50">
// //                 <div className="sticky top-20 p-4">
// //                   <PDFExport ref={pdfExportComponent} {...pdfExportOptions}>
// //                     <Preview selectedTemplate={selectedTemplate} />
// //                   </PDFExport>
// //                 </div>
// //               </aside>
// //             </div>

// //             {/* Mobile Navigation */}
// //             <MobileNavigation />
// //           </div>
// //         ) : (
// //           // Finished State
// //           <div className="flex flex-col">
// //             {/* Mobile Finished Controls */}
// //             <div className="flex flex-col p-2 md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">

// //                     <button
// //                 className=" mb-2 text-white rounded-lg"
// //               >
// //                 <TemplateSelector
// //                       selectedTemplate={selectedTemplate}
// //                       setSelectedTemplate={setSelectedTemplate}
// //                     />
// //               </button>
// //               {/* <button
// //                 onClick={handleFinish}
// //                 className=" mb-2 bg-blue-950 text-white px-4 py-2 rounded-lg"
// //               >
// //                 Save Resume
// //               </button> */}
// //                <LoaderButton
// //         isLoading={isLoading}
// //         onClick={handleFinish}
// //         className="bg-blue-950 text-white px-4 py-2 rounded-lg"
// //       >
// //         Save Resume
// //       </LoaderButton>

// //               <button
// //                 onClick={downloadAsPDF}
// //                 className=" bg-yellow-500 text-black px-4 py-2 rounded-lg"
// //               >
// //                 Pay & Download
// //               </button>
// //             </div>

// //             {/* Desktop Controls - Hidden on Mobile */}
// //             <div className="hidden md:flex justify-between items-center bg-white shadow">
// //               <div className="flex gap-4">
// //                 <select
// //                   value={selectedFont}
// //                   onChange={handleFontChange}
// //                   className="px-4 py-2 border rounded-lg"
// //                 >
// //                   <option value="Ubuntu">Ubuntu</option>
// //                   <option value="Calibri">Calibri</option>
// //                   <option value="Georgia">Georgia</option>
// //                   <option value="Roboto">Roboto</option>
// //                   <option value="Poppins">Poppins</option>
// //                 </select>
// //                 <ColorPicker
// //                   selectedColor={headerColor}
// //                   onChange={setHeaderColor}
// //                 />
// //                 <ColorPickers
// //                   selectmultiplecolor={backgroundColorss}
// //                   onChange={setBgColor}
// //                 />
// //                 <TemplateSelector
// //                   selectedTemplate={selectedTemplate}
// //                   setSelectedTemplate={setSelectedTemplate}
// //                 />
// //               </div>
// //               <div className="flex gap-4">
// //                 <button
// //                   onClick={handleFinish}
// //                   className="bg-blue-950 text-white px-6 py-2 rounded-lg"
// //                 >
// //                   Save Resume
// //                 </button>
// //                 <button
// //                   onClick={downloadAsPDF}
// //                   className="bg-yellow-500 text-black px-6 py-2 rounded-lg"
// //                 >
// //                   Pay & Download
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Preview */}
// //             <div className="pb-28">
// //               <PDFExport ref={pdfExportComponent} {...pdfExportOptions}>
// //                 <Preview selectedTemplate={selectedTemplate} />
// //               </PDFExport>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </ResumeContext.Provider>
// //   );
// // }

// // export { ResumeContext };
// import React, { useState, useRef, createContext, useEffect } from "react";
// import Language from "../components/form/Language";
// import axios from "axios";
// import Meta from "../components/meta/Meta";
// import FormCP from "../components/form/FormCP";
// import dynamic from "next/dynamic";
// import DefaultResumeData from "../components/utility/DefaultResumeData";
// import SocialMedia from "../components/form/SocialMedia";
// import WorkExperience from "../components/form/WorkExperience";
// import Skill from "../components/form/Skill";
// import PersonalInformation from "../components/form/PersonalInformation";
// import Summary from "../components/form/Summary";
// import Projects from "../components/form/Projects";
// import Education from "../components/form/Education";
// import Certification from "../components/form/certification";
// import ColorPicker from "./ColorPicker";
// import ColorPickers from "./ColorPickers";
// import Preview from "../components/preview/Preview";
// import TemplateSelector from "../components/preview/TemplateSelector";
// import { PDFExport } from "@progress/kendo-react-pdf";
// import LoadUnload from "../components/form/LoadUnload";
// import MyResume from "./dashboard/MyResume";
// import { useRouter } from "next/router";
// import Sidebar from "./dashboard/Sidebar";
// import { toast } from "react-toastify";
// import LoaderButton from "../components/utility/LoaderButton";
// import useLoader from "../hooks/useLoader";
// import Modal from "./adminlogin/Modal";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import resumeImg from "./builderImages/GraphicDesignerResume.jpg";
// import poweredbypaypal from "./builderImages/poweredbypaypal.png";
// import paypal from "./builderImages/paypal.png";
// import logo from "./builderImages/logo.jpg";
// import applepay from "./builderImages/apple-pay.png";
// const ResumeContext = createContext(DefaultResumeData);

// const Print = dynamic(() => import("../components/utility/WinPrint"), {
//   ssr: false,
// });

// export default function Builder({ onClose }) {
//   const [resumeData, setResumeData] = useState(DefaultResumeData);
//   const [formClose, setFormClose] = useState(false);
//   const [currentSection, setCurrentSection] = useState(0);
//   const [selectedFont, setSelectedFont] = useState("Ubuntu");
//   const [headerColor, setHeaderColor] = useState("");
//   const [backgroundColorss, setBgColor] = useState("");
//   const [selectedTemplate, setSelectedTemplate] = useState("template1");
//   const [isFinished, setIsFinished] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [token, setToken] = useState(null);
//   const [resumeId, setResumeId] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const router = useRouter();
//   const pdfExportComponent = useRef(null);
//   const [isLoading, handleAction] = useLoader();
//   const { PayerID } = router.query;
//   const [isSaved, setIsSaved] = useState(false);
//   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
//   const [userId, setUserId] = useState(0);
//   useEffect(() => {
//     setUserId(localStorage.getItem("user_id"));
//   }, []);
//   // console.log(userId, "userid");
//   // Add toggle function
//   const toggleMobileSidebar = () => {
//     setIsMobileSidebarOpen(!isMobileSidebarOpen);
//   };

//   // Load saved state from localStorage on initial mount
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Load token
//       const storedToken = localStorage.getItem("token");
//       setToken(storedToken);

//       // Load other persisted states
//       const storedIsFinished = localStorage.getItem("isFinished");
//       const storedTemplate = localStorage.getItem("selectedTemplate");
//       const storedFont = localStorage.getItem("selectedFont");
//       const storedBgColor = localStorage.getItem("backgroundColor");
//       const storedCurrentSection = localStorage.getItem("currentSection");
//       const storedResumeData = localStorage.getItem("resumeData");

//       if (storedIsFinished) setIsFinished(JSON.parse(storedIsFinished));
//       if (storedTemplate) setSelectedTemplate(storedTemplate);
//       if (storedFont) setSelectedFont(storedFont);
//       if (storedBgColor) setBgColor(storedBgColor);
//       if (storedCurrentSection)
//         setCurrentSection(parseInt(storedCurrentSection));
//       if (storedResumeData) setResumeData(JSON.parse(storedResumeData));
//     }
//   }, []);

//   // Save states to localStorage whenever they change
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("isFinished", JSON.stringify(isFinished));
//       localStorage.setItem("selectedTemplate", selectedTemplate);
//       localStorage.setItem("selectedFont", selectedFont);
//       localStorage.setItem("headerColor", headerColor);
//       localStorage.setItem("backgroundColor", backgroundColorss);
//       localStorage.setItem("currentSection", currentSection.toString());
//       localStorage.setItem("resumeData", JSON.stringify(resumeData));
//     }
//   }, [
//     isFinished,
//     selectedTemplate,
//     selectedFont,
//     headerColor,
//     backgroundColorss,
//     currentSection,
//     resumeData,
//   ]);

//   // Prevent state reset on page refresh
//   // useEffect(() => {
//   //   const handleBeforeUnload = (e) => {
//   //     e.preventDefault();
//   //     e.returnValue = '';
//   //   };

//   //   window.addEventListener('beforeunload', handleBeforeUnload);

//   //   return () => {
//   //     window.removeEventListener('beforeunload', handleBeforeUnload);
//   //   };
//   // }, []);
//   useEffect(() => {
//     const savedState = localStorage.getItem("isSaved");
//     if (savedState === "true") {
//       setIsSaved(true);
//     }
//   }, []);
//   useEffect(() => {
//     // When resumeData changes, set isSaved to false
//     if (isSaved) {
//       setIsSaved(false);
//       localStorage.setItem("isSaved", "false");
//     }
//   }, [resumeData]);

//   useEffect(() => {
//     const handleBeforeUnload = (e) => {
//       if (!isSaved) {
//         e.preventDefault();
//         e.returnValue =
//           "You have unsaved changes. Are you sure you want to leave?";
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [isSaved]);

//   // Rest of the code remains the same...
//   // (Keep all the existing code below this point unchanged)

//   useEffect(() => {
//     const path = window.location.pathname;
//     const id = path.split("/").pop();
//     setResumeId(id);
//   }, []);

//   const sections = [
//     { label: "Personal Details", component: <PersonalInformation /> },
//     { label: "Social Links", component: <SocialMedia /> },
//     { label: "Summary", component: <Summary /> },
//     { label: "Education", component: <Education /> },
//     { label: "Experience", component: <WorkExperience /> },
//     { label: "Projects", component: <Projects /> },
//     {
//       label: "Skills",
//       component: Array.isArray(resumeData?.skills) ? (
//         resumeData.skills.map((skill, index) => (
//           <Skill title={skill.title} key={index} />
//         ))
//       ) : (
//         <p>No skills available</p>
//       ),
//     },
//     { label: "Languages", component: <Language /> },
//     { label: "Certifications", component: <Certification /> },
//   ];

//   const handleProfilePicture = (e) => {
//     const file = e.target.files[0];
//     if (file instanceof Blob) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setResumeData({ ...resumeData, profilePicture: event.target.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (e) => {
//     setResumeData({ ...resumeData, [e.target.name]: e.target.value });
//   };

//   // const handleNext = () => {
//   //   if (currentSection === sections.length - 1) {
//   //     setIsFinished(true);
//   //   } else {
//   //     setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
//   //   }
//   // };
//   // Modify the handleNext function to preserve state
//   const handleNext = () => {
//     if (currentSection === sections.length - 1) {
//       // Save current state before switching to finished mode
//       localStorage.setItem("tempResumeData", JSON.stringify(resumeData));
//       localStorage.setItem("tempHeaderColor", headerColor);
//       localStorage.setItem("tempBgColor", backgroundColorss);
//       localStorage.setItem("tempFont", selectedFont);
//       setIsFinished(true);
//     } else {
//       setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
//     }
//   };

//   // Add effect to restore state when entering finished mode
//   useEffect(() => {
//     if (isFinished) {
//       const tempResumeData = localStorage.getItem("tempResumeData");
//       const tempHeaderColor = localStorage.getItem("tempHeaderColor");
//       const tempBgColor = localStorage.getItem("tempBgColor");
//       const tempFont = localStorage.getItem("tempFont");

//       if (tempResumeData) setResumeData(JSON.parse(tempResumeData));
//       if (tempHeaderColor) setHeaderColor(tempHeaderColor);
//       if (tempBgColor) setBgColor(tempBgColor);
//       if (tempFont) setSelectedFont(tempFont);
//     }
//   }, [isFinished]);

//   // Add cleanup when component unmounts
//   useEffect(() => {
//     return () => {
//       // Clean up temporary storage
//       localStorage.removeItem("tempResumeData");
//       localStorage.removeItem("tempHeaderColor");
//       localStorage.removeItem("tempBgColor");
//       localStorage.removeItem("tempFont");
//     };
//   }, []);
//   const handlePrevious = () => {
//     setCurrentSection((prev) => Math.max(prev - 1, 0));
//   };

//   const handleSectionClick = (index) => {
//     setCurrentSection(index);
//     setIsMobileMenuOpen(false);
//   };

//   const handleFontChange = (e) => {
//     setSelectedFont(e.target.value);
//   };

//   const nextSection = () => {
//     if (currentSection < sections.length - 1) {
//       handleSectionClick(currentSection + 1);
//     }
//   };

//   const prevSection = () => {
//     if (currentSection > 0) {
//       handleSectionClick(currentSection - 1);
//     }
//   };

//   const pdfExportOptions = {
//     paperSize: "A4",
//     fileName: "resume.pdf",
//     author: resumeData.firstName + " " + resumeData.lastName,
//     creator: "ATSResume Builder",
//     date: new Date(),
//     scale: 0.7,
//     forcePageBreak: ".page-break",
//   };

//   const [showModal, setShowModal] = useState(false);
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [phone, setPhone] = useState("");
//   // Fixed price

//   const handleCloseModal = () => setShowModal(false);
//   const handleShowModal = () => setShowModal(true);

//   const downloadAsPDF = async () => {
//     let amount;

//     if (userId == 121 || userId == 1) {
//       amount = 1;
//     } else {
//       amount = 49;
//     }

//     // Fixed price

//     try {
//       // Make the payment API call
//       const payload = {
//         amount,
//         ResumeId: resumeId, // Make sure resumeId is defined in your component
//         Token: token || "", // Make sure token is defined in your component
//       };

//       const response = await axios.post(
//         "https://api.resumeintellect.com/api/user/paypal/create-payment",
//         payload,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = response.data;
//       // console.log(data, "data");
//       if (data && data.data) {
//         // Store the order ID for later verification if needed
//         const orderId = data.order_id;
//         localStorage.setItem("orderid", orderId);

//         // Redirect the user to PayPal URL to complete payment
//         if (data.data) {
//           window.location.href = data.data; // Redirect to PayPal
//         } else {
//           console.error("Payment URL not found");
//         }
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       // Handle error (show error message to user)
//     }
//   };

//   useEffect(() => {
//     if (PayerID) {
//       verifyPayment();
//     }
//   });
//   const verifyPayment = async () => {
//     try {
//       const orderId = localStorage.getItem("orderid");
//       const token = localStorage.getItem("token");

//       if (orderId && token && PayerID) {
//         const response = await axios.get(
//           `https://api.resumeintellect.com/api/user/paypal/verify-order?orderid=${orderId}`,
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data.status === "success") {
//           setPaymentVerified(true);
//           toast.success("Payment verified successfully!");

//           localStorage.removeItem("orderid");

//           // If verification is successful, trigger PDF download
//           if (pdfExportComponent.current) {
//             pdfExportComponent.current.save();
//           }
//         } else {
//           toast.error("Payment verification failed. Please try again.");
//           router.push("/payment-failed");
//         }
//       }
//     } catch (error) {
//       console.error("Payment Verification Error:", error);
//       toast.error(
//         error?.response?.data?.message || "Payment verification failed"
//       );
//       router.push("/payment-failed");
//     }
//   };

//   const handleFinish = async () => {
//     if (!resumeData) return;

//     const templateData = {
//       templateData: {
//         name: resumeData.name || "",
//         position: resumeData.position || "",
//         contactInformation: resumeData.contact || "",
//         email: resumeData.email || "",
//         address: resumeData.address || "",
//         profilePicture: resumeData.profilePicture || "",
//         socialMedia:
//           resumeData.socialMedia?.map((media) => ({
//             socialMedia: media.platform || "",
//             link: media.link || "",
//           })) || [],
//         summary: resumeData.summary || "",
//         education:
//           resumeData.education?.map((edu) => ({
//             school: edu.school || "",
//             degree: edu.degree || "",
//             startYear: edu.startYear || "",
//             endYear: edu.endYear || "",
//           })) || [],
//         workExperience:
//           resumeData.workExperience?.map((exp) => ({
//             company: exp.company || "",
//             position: exp.position || "",
//             description: exp.description || "",
//             KeyAchievements: Array.isArray(exp.keyAchievements)
//               ? exp.keyAchievements
//               : [exp.keyAchievements || ""],
//             startYear: exp.startYear || "",
//             endYear: exp.endYear || "",
//           })) || [],
//         projects:
//           resumeData.projects?.map((project) => ({
//             title: project.title || "",
//             link: project.link || "",
//             description: project.description || "",
//             keyAchievements: Array.isArray(project.keyAchievements)
//               ? project.keyAchievements
//               : [project.keyAchievements || ""],
//             startYear: project.startYear || "",
//             endYear: project.endYear || "",
//             name: project.name || "",
//           })) || [],
//         skills: Array.isArray(resumeData.skills)
//           ? resumeData.skills.map((skill) => ({
//               title: skill.title || "",
//               skills: skill.skills || [],
//             }))
//           : [],
//         languages: resumeData.languages || [],
//         certifications: resumeData.certifications || [],
//         // Add template information
//         templateDetails: {
//           templateId: selectedTemplate,
//           backgroundColor: backgroundColorss || "",
//           font: selectedFont || "Ubuntu",
//         },
//       },
//     };
//     // console.log(templateData, "templateData");
//     await handleAction(async () => {
//       try {
//         const id = router.query.id || localStorage.getItem("resumeId");
//         if (!id) {
//           console.error("Resume ID not found.");
//           return;
//         }

//         const url = `https://api.resumeintellect.com/api/user/resume-update/${id}`;
//         const response = await axios.put(url, templateData, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//         });

//         // console.log("Resume updated successfully:", response.data);
//         if (response.data.code === 200 || response.data.status === "success") {
//           setIsSaved(true);
//           localStorage.setItem("isSaved", "true");
//           toast.success(response.data.message || "Resume saved Successfully");
//         } else {
//           toast.error(response.data.error || "Error while saving the Resume");
//         }
//       } catch (error) {
//         toast.error(error?.message || "Error !!");
//         console.error("Error updating resume:", error);
//       }
//     });
//   };

//   // console.log(resumeData, "Resumedata");

//   const MobileNavigation = () => (
//     <div className="fixed px-2 bottom-0 left-0 right-0 bg-white shadow-lg py-4 md:hidden">
//       <div className="flex justify-between items-center">
//         <button
//           onClick={handlePrevious}
//           disabled={currentSection === 0}
//           className="px-4 py-2 bg-blue-950 text-white rounded-lg disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-sm font-medium">
//           {sections[currentSection].label}
//         </span>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-yellow-500 text-black rounded-lg"
//         >
//           {currentSection === sections.length - 1 ? "Finish" : "Next"}
//         </button>
//       </div>
//     </div>
//   );

//   const MobileMenu = () => (
//     <div className="md:hidden">
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-white z-40 p-4 pt-16">
//           <div className="overflow-y-auto h-full">
//             {sections.map((section, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleSectionClick(index)}
//                 className={`w-full p-3 mb-2 rounded-lg text-left ${
//                   currentSection === index
//                     ? "bg-blue-950 text-white"
//                     : "bg-gray-100 text-blue-950"
//                 }`}
//               >
//                 {section.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
//   const handleBackToEditor = () => {
//     // Save current state before switching back
//     localStorage.setItem("tempResumeData", JSON.stringify(resumeData));
//     localStorage.setItem("tempHeaderColor", headerColor);
//     localStorage.setItem("tempBgColor", backgroundColorss);
//     localStorage.setItem("tempFont", selectedFont);
//     setIsFinished(false);
//     setCurrentSection(0); // Optionally reset to first section
//   };

//   // Return your existing JSX

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         // Fetch user profile
//         const userProfileResponse = await axios.get(
//           "https://api.resumeintellect.com/api/user/user-profile",
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );

//         if (userProfileResponse.data.status === "success") {
//           const userData = userProfileResponse.data.data;
//           setFormData((prevData) => ({
//             ...prevData,
//             first_name: userData.first_name || "",
//             last_name: userData.last_name || "",

//             phone: userData.phone || "",
//             email: userData.email || "",
//           }));
//         }
//       } catch (error) {
//         console.error("An error occurred while fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <ResumeContext.Provider
//       value={{
//         resumeData,
//         setResumeData,
//         handleProfilePicture,
//         handleChange,
//         headerColor,
//         backgroundColorss,
//         selectedFont,
//       }}
//     >
//       <Meta
//         title="ATSResume | Get hired with an ATS-optimized resume"
//         description="ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes..."
//         keywords="ATS-friendly, Resume optimization..."
//       />

//       <div className="min-h-screen bg-gray-50">
//         {/* Mobile Components */}
//         <MobileMenu />

//         {!isFinished ? (
//           <div className="min-h-screen bg-gray-50 flex flex-col">
//             {/* <LoadUnload /> */}
//             <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//               <MyResume />
//             </Modal>
//             {/* Form Navigation Bar */}
//             <div className="w-full bg-gray-200 p-4 shadow-sm">
//               <div className="hidden md:flex flex-col lg:flex-row items-center justify-between gap-4">
//                 {/* Navigation Buttons */}
//                 <div className="flex w-full lg:w-auto gap-4">
//                   <button
//                     type="button"
//                     onClick={handlePrevious}
//                     disabled={currentSection === 0}
//                     className="w-40 h-10 rounded-lg bg-blue-950 text-white font-medium transition hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Previous
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleNext}
//                     className="w-40 h-10 rounded-lg bg-yellow-500 text-black font-medium transition hover:bg-yellow-400"
//                   >
//                     {currentSection === sections.length - 1 ? "Finish" : "Next"}
//                   </button>
//                 </div>

//                 {/* Controls Group */}
//                 <div className="hidden lg:flex items-center gap-4">
//                   <select
//                     value={selectedFont}
//                     onChange={handleFontChange}
//                     className="w-40 h-10 rounded-lg border border-blue-800 px-4 font-bold text-blue-800 bg-white focus:ring-2 focus:ring-blue-800"
//                   >
//                     <option value="Ubuntu">Ubuntu</option>
//                     <option value="Calibri">Calibri</option>
//                     <option value="Georgia">Georgia</option>
//                     <option value="Roboto">Roboto</option>
//                     <option value="Poppins">Poppins</option>
//                   </select>

//                   <div className="flex items-center gap-4">
//                     <ColorPicker
//                       selectedColor={headerColor}
//                       onChange={setHeaderColor}
//                     />
//                     <ColorPickers
//                       selectmultiplecolor={backgroundColorss}
//                       onChange={setBgColor}
//                     />
//                     <TemplateSelector
//                       selectedTemplate={selectedTemplate}
//                       setSelectedTemplate={setSelectedTemplate}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sticky Top Navigation */}
//             <div className="sticky top-0 z-10 w-full bg-white shadow-sm">
//               <div className="hidden md:flex justify-center items-center p-4">
//                 <nav className="bg-gray-100 rounded-lg p-2">
//                   <div className="flex items-center">
//                     <button
//                       onClick={() => prevSection()}
//                       className="p-2 hover:bg-gray-200 rounded-lg hidden md:block"
//                       disabled={currentSection === 0}
//                     >
//                       {/* Chevron Left Icon Here */}
//                     </button>

//                     <div className="flex-1 overflow-x-auto scrollbar-hide ">
//                       <ul className="flex flex-row gap-3 items-center py-2 px-4  ">
//                         {sections.map((section, index) => (
//                           <li
//                             key={index}
//                             className={`px-4 py-2 cursor-pointer transition rounded-lg border-2 ${
//                               currentSection === index
//                                 ? "border-blue-800 font-semibold bg-blue-950 text-white"
//                                 : "border-blue-800 bg-white text-blue-800 hover:bg-blue-50"
//                             }`}
//                             onClick={() => handleSectionClick(index)}
//                           >
//                             {section.label}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <button
//                       onClick={() => nextSection()}
//                       className="p-2 hover:bg-gray-200 rounded-lg hidden md:block"
//                       disabled={currentSection === sections.length - 1}
//                     >
//                       {/* Chevron Right Icon Here */}
//                     </button>
//                   </div>
//                 </nav>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex flex-col md:flex-row flex-grow ">
//               {/* Sidebar */}
//               {/* <aside className="hidden md:block w-64 min-h-screen border-r bg-gray-100">
//                     <div className="sticky top-20 p-4">
//                       <Sidebar />
//                     </div>
//                   </aside> */}
//               <button
//                 onClick={toggleMobileSidebar}
//                 className="fixed z-40 bottom-20 right-4 md:hidden bg-blue-950 text-white p-3 rounded-full shadow-lg"
//               >
//                 {isMobileSidebarOpen ? (
//                   <X className="h-6 w-6 stroke-2" />
//                 ) : (
//                   <Menu className="h-6 w-6 stroke-2" />
//                 )}
//               </button>

//               {/* Mobile Sidebar Overlay */}
//               {isMobileSidebarOpen && (
//                 <div
//                   className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//                   onClick={toggleMobileSidebar}
//                 />
//               )}

//               {/* Updated Sidebar */}
//               <aside
//                 className={`fixed md:static left-0 top-0 h-full z-10 transform 
//                                 ${
//                                   isMobileSidebarOpen
//                                     ? "translate-x-0"
//                                     : "-translate-x-full"
//                                 } 
//                                 md:translate-x-0 transition-transform duration-300 ease-in-out 
//                                 w-64 bg-gray-100 border-r`}
//               >
//                 <div className="sticky top-20 p-4 overflow-y-auto h-full">
//                   {/* Mobile Close Button */}
//                   {/* <button
//                                     onClick={toggleMobileSidebar}
//                                     className="absolute top-4 right-4 md:hidden text-gray-500 hover:text-gray-700"
//                                 >
//                                     <Menu className="h-6 w-6" />
//                                 </button> */}

//                   {/* Sidebar Content */}
//                   <div className="mt-12 md:mt-0">
//                     <Sidebar />
//                   </div>
//                 </div>
//               </aside>

//               {/* Form Content */}
//               <main className="flex-1 max-w-2xl mx-auto md:p-4">
//                 <form>{sections[currentSection].component}</form>
//               </main>

//               {/* Preview Panel */}
//               <aside className="hidden md:block w-1/2 min-h-screen border-l bg-gray-50">
//                 <div className="sticky top-20 p-4">
//                   <PDFExport ref={pdfExportComponent} {...pdfExportOptions}>
//                     <Preview selectedTemplate={selectedTemplate} />
//                   </PDFExport>
//                 </div>
//               </aside>
//             </div>

//             {/* Mobile Navigation */}
//             <MobileNavigation />
//           </div>
//         ) : (
//           // Finished State
//           <div className=" flex flex-col">
//             {/* Mobile Finished Controls */}
//             <div className="flex flex-col gap-4 p-2 md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
//               <LoaderButton
//                 isLoading={isLoading}
//                 onClick={handleFinish}
//                 className="bg-blue-950 text-white px-4 py-2 rounded-lg"
//               >
//                 Save Resume
//               </LoaderButton>

//               <button
//                 onClick={handleShowModal}
//                 className=" bg-yellow-500 text-black px-4 py-2 rounded-lg"
//               >
//                 Pay & Download
//               </button>
//               {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                   <div className="w-full max-w-[90%] sm:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto">
//                     {/* Logo and Close Button */}
//                     <div className="flex justify-between items-center p-4 border-b">
//                       <Image src={logo} alt="logo" className="h-8 w-auto" />
//                       <button
//                         className="text-gray-600 hover:text-gray-800"
//                         onClick={handleCloseModal}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="2"
//                           stroke="currentColor"
//                           className="w-6 h-6"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M6 18L18 6M6 6l12 12"
//                           />
//                         </svg>
//                       </button>
//                     </div>

//                     {/* Modal Content */}
//                     <div className="flex flex-col md:flex-row">
//                       {/* Image Section */}
//                       <div className="w-full md:w-1/2 p-4 flex justify-center">
//                         <div className=" sm:w-80 sm:h-80">
//                           <Image
//                             src={resumeImg}
//                             alt="resumeimg"
//                             className="w-full h-full object-cover rounded-lg"
//                           />
//                         </div>
//                       </div>

//                       {/* Form Section */}
//                       <div className="w-full md:w-1/2 p-4">
//                         <div className="text-center mb-6">
//                           <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
//                             $49
//                           </h2>
//                           <p className="text-sm text-gray-500">Total Amount</p>
//                         </div>

//                         <form>
//                           <div className="mb-4">
//                             <label className="block text-gray-800 mb-2">
//                               👨🏻‍💼 Name
//                             </label>
//                             <input
//                               type="text"
//                               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                               value={`${formData.first_name} ${formData.last_name}`.trim()}
//                               name="full name"
//                               required
//                               disabled
//                             />
//                           </div>

//                           <div className="mb-4">
//                             <label className="block text-gray-800 mb-2">
//                               📧 Email
//                             </label>
//                             <input
//                               type="email"
//                               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                               value={formData.email}
//                               name="email"
//                               required
//                               disabled
//                             />
//                           </div>

//                           <div className="mb-4">
//                             <label className="block text-gray-800 mb-2">
//                               ☎️ Phone
//                             </label>
//                             <input
//                               type="number"
//                               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                               name="phone"
//                               value={formData.phone}
//                               required
//                               disabled
//                             />
//                           </div>

//                           {/* Submit Button */}
//                           <div className="flex justify-center mt-6">
//                             <button
//                               onClick={downloadAsPDF}
//                               type="submit"
//                               className="w-full bg-yellow-400 text-blue-800 font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200 flex items-center justify-center"
//                             >
//                               <Image
//                                 src={paypal}
//                                 alt="paypal"
//                                 className="h-10 w-auto m-auto "
//                               />
//                             </button>
//                           </div>
//                           <div className="flex justify-center mt-6">
//                             <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
//                               <Image
//                                 src={applepay}
//                                 alt="apple pay"
//                                 className=" w-auto m-auto h-10"
//                               />
//                             </button>
//                           </div>
//                           <div className="flex justify-center mt-6">
//                             <Image
//                               src={poweredbypaypal}
//                               alt="poweredbypaypal"
//                               className="h-8 w-auto"
//                             />
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <button
//                 onClick={handleBackToEditor}
//                 className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
//               >
//                 Back to Dashboard
//               </button>
//             </div>

//             {/* Desktop Controls - Hidden on Mobile */}
//             <div className="hidden md:flex w-screen px-8 py-4 justify-between items-center bg-white shadow">
//               <div className="flex gap-4">
//                 <select
//                   value={selectedFont}
//                   onChange={handleFontChange}
//                   className="px-4 py-2 border rounded-lg"
//                 >
//                   <option value="Ubuntu">Ubuntu</option>
//                   <option value="Calibri">Calibri</option>
//                   <option value="Georgia">Georgia</option>
//                   <option value="Roboto">Roboto</option>
//                   <option value="Poppins">Poppins</option>
//                 </select>
//                 <ColorPicker
//                   selectedColor={headerColor}
//                   onChange={setHeaderColor}
//                 />
//                 <ColorPickers
//                   selectmultiplecolor={backgroundColorss}
//                   onChange={setBgColor}
//                 />
//                 <TemplateSelector
//                   selectedTemplate={selectedTemplate}
//                   setSelectedTemplate={setSelectedTemplate}
//                 />
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   onClick={handleFinish}
//                   className="bg-blue-950 text-white px-6 py-2 rounded-lg"
//                 >
//                   Save Resume
//                 </button>
//                 <button
//                   onClick={handleShowModal}
//                   className="bg-yellow-500 text-black px-6 py-2 rounded-lg"
//                 >
//                   Pay & Download
//                 </button>
//                 {showModal && (
//                   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                     <div className=" w-full max-w-4xl bg-white rounded-lg shadow-lg ">
//                       {/* Logo */}
//                       <div className="flex justify-between items-center p-2">
//                         <Image src={logo} alt="logo" className="h-10 w-auto" />
//                         {/* Close Button */}
//                         <button
//                           className=" text-gray-600 hover:text-gray-800 z-20"
//                           onClick={handleCloseModal}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="2"
//                             stroke="currentColor"
//                             className="w-6 h-6"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                       <div className="flex flex-col md:flex-row">
//                         {/* Image Section */}
//                         <div className="md:w-1/2 w-full p-4  ">
//                           <div className="w-[400px] h-[400px]">
//                             <Image
//                               src={resumeImg}
//                               alt="resumeimg"
//                               className="w- full h-full rounded-l-lg"
//                             />
//                           </div>
//                         </div>

//                         {/* Right Section: Form */}
//                         <div className="md:w-1/2 w-full p-4 ">
//                           <div className="text-center mb-6">
//                             <h2 className="text-2xl font-bold text-gray-900">
//                               $49
//                             </h2>
//                             <p className="text-sm text-gray-500">
//                               Total Amount
//                             </p>
//                           </div>

//                           <form>
//                             <div className="mb-4">
//                               <label className="block text-gray-800 mb-2">
//                                 👨🏻‍💼 Name
//                               </label>
//                               <input
//                                 type="text"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 // value={formData.first_name}
//                                 value={`${formData.first_name} ${formData.last_name}`.trim()}
//                                 name="full name"
//                                 // onChange={(e) => setName(e.target.value)}
//                                 required
//                                 disabled
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label className="block text-gray-800 mb-2">
//                                 📧 Email
//                               </label>
//                               <input
//                                 type="email"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 value={formData.email}
//                                 // onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 name="email"
//                                 disabled
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label className="block text-gray-800 mb-2">
//                                 ☎️ Phone
//                               </label>
//                               <input
//                                 // type="tel"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 // value={phone}
//                                 // onChange={(e) => setPhone(e.target.value)}
//                                 required
//                                 disabled
//                                 type="number"
//                                 name="phone"
//                                 value={formData.phone}
//                               />
//                             </div>

//                             {/* Submit Button */}
//                             <div className="flex justify-center mt-6">
//                               <button
//                                 onClick={downloadAsPDF}
//                                 type="submit"
//                                 className="w-full bg-yellow-400 text-blue-800 font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200"
//                               >
//                                 <Image
//                                   src={paypal}
//                                   alt="paypal"
//                                   className="h-10 w-auto m-auto"
//                                 />
//                               </button>
//                             </div>
//                             <div className="flex justify-center mt-6">
//                               <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
//                                 <Image
//                                   src={applepay}
//                                   alt="apple pay"
//                                   className=" w-auto m-auto h-10"
//                                 />
//                               </button>
//                             </div>
//                             <div className="flex justify-center mt-6 ">
//                               <Image
//                                 src={poweredbypaypal}
//                                 alt="poweredbypaypal"
//                                 className="h-10 w-auto"
//                               />
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <button
//                   onClick={handleBackToEditor}
//                   className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
//                 >
//                   Back to Dashboard
//                 </button>
//               </div>
//             </div>

//             {/* Preview */}
//             <div className="pb-28">
//               <PDFExport ref={pdfExportComponent} {...pdfExportOptions}>
//                 <Preview selectedTemplate={selectedTemplate} />
//               </PDFExport>
//             </div>
//           </div>
//         )}
//       </div>
//     </ResumeContext.Provider>
//   );
// }

// export { ResumeContext };


// import React, { useState, useRef, createContext, useEffect } from "react";
// import Language from "../components/form/Language";
// import axios from "axios";
// import Meta from "../components/meta/Meta";
// import FormCP from "../components/form/FormCP";
// import dynamic from "next/dynamic";
// import DefaultResumeData from "../components/utility/DefaultResumeData";
// import SocialMedia from "../components/form/SocialMedia";
// import WorkExperience from "../components/form/WorkExperience";
// import Skill from "../components/form/Skill";
// import PersonalInformation from "../components/form/PersonalInformation";
// import Summary from "../components/form/Summary";
// import Projects from "../components/form/Projects";
// import Education from "../components/form/Education";
// import Certification from "../components/form/certification";
// import ColorPicker from "./ColorPicker";
// import ColorPickers from "./ColorPickers";
// import Preview from "../components/preview/Preview";
// import TemplateSelector from "../components/preview/TemplateSelector";
// import { PDFExport } from "@progress/kendo-react-pdf";
// import LoadUnload from "../components/form/LoadUnload";
// import MyResume from "./dashboard/MyResume";
// import { useRouter } from "next/router";
// import Sidebar from "./dashboard/Sidebar";
// import { toast } from "react-toastify";
// import LoaderButton from "../components/utility/LoaderButton";
// import useLoader from "../hooks/useLoader";
// import Modal from "./adminlogin/Modal";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import resumeImg from "./builderImages/GraphicDesignerResume.jpg";
// import poweredbypaypal from "./builderImages/poweredbypaypal.png";
// import paypal from "./builderImages/paypal.png";
// import logo from "./builderImages/logo.jpg";
// import applepay from "./builderImages/apple-pay.png";
// import { ResumeProvider } from "../components/context/ResumeContext";
// // const ResumeContext = createContext(DefaultResumeData);

// const Print = dynamic(() => import("../components/utility/WinPrint"), {
//   ssr: false,
// });

// export default function Builder({ onClose }) {
//   const [resumeData, setResumeData] = useState(DefaultResumeData);
//   const [formClose, setFormClose] = useState(false);
//   const [currentSection, setCurrentSection] = useState(0);
//   const [selectedFont, setSelectedFont] = useState("Ubuntu");
//   const [headerColor, setHeaderColor] = useState("");
//   const [backgroundColorss, setBgColor] = useState("");
//   const [selectedTemplate, setSelectedTemplate] = useState("template1");
//   const [isFinished, setIsFinished] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [token, setToken] = useState(null);
//   const [resumeId, setResumeId] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const router = useRouter();
//   const pdfExportComponent = useRef(null);
//   const [isLoading, handleAction] = useLoader();
//   const { PayerID } = router.query;
//   const [isSaved, setIsSaved] = useState(false);
//   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
//   const [userId, setUserId] = useState(0);
//   const templateRef = useRef(null)
//   useEffect(() => {
//     setUserId(localStorage.getItem("user_id"));
//   }, []);
//   // console.log(userId, "userid");
//   // Add toggle function
//   const toggleMobileSidebar = () => {
//     setIsMobileSidebarOpen(!isMobileSidebarOpen);
//   };

//   // Load saved state from localStorage on initial mount
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Load token
//       const storedToken = localStorage.getItem("token");
//       setToken(storedToken);

//       // Load other persisted states
//       const storedIsFinished = localStorage.getItem("isFinished");
//       const storedTemplate = localStorage.getItem("selectedTemplate");
//       const storedFont = localStorage.getItem("selectedFont");
//       const storedBgColor = localStorage.getItem("backgroundColor");
//       const storedCurrentSection = localStorage.getItem("currentSection");
//       const storedResumeData = localStorage.getItem("resumeData");

//       if (storedIsFinished) setIsFinished(JSON.parse(storedIsFinished));
//       if (storedTemplate) setSelectedTemplate(storedTemplate);
//       if (storedFont) setSelectedFont(storedFont);
//       if (storedBgColor) setBgColor(storedBgColor);
//       if (storedCurrentSection)
//         setCurrentSection(parseInt(storedCurrentSection));
//       if (storedResumeData) setResumeData(JSON.parse(storedResumeData));
//     }
//   }, []);

//   // Save states to localStorage whenever they change
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("isFinished", JSON.stringify(isFinished));
//       localStorage.setItem("selectedTemplate", selectedTemplate);
//       localStorage.setItem("selectedFont", selectedFont);
//       localStorage.setItem("headerColor", headerColor);
//       localStorage.setItem("backgroundColor", backgroundColorss);
//       localStorage.setItem("currentSection", currentSection.toString());
//       localStorage.setItem("resumeData", JSON.stringify(resumeData));
//     }
//   }, [
//     isFinished,
//     selectedTemplate,
//     selectedFont,
//     headerColor,
//     backgroundColorss,
//     currentSection,
//     resumeData,
//   ]);

//   // Prevent state reset on page refresh
//   // useEffect(() => {
//   //   const handleBeforeUnload = (e) => {
//   //     e.preventDefault();
//   //     e.returnValue = '';
//   //   };

//   //   window.addEventListener('beforeunload', handleBeforeUnload);

//   //   return () => {
//   //     window.removeEventListener('beforeunload', handleBeforeUnload);
//   //   };
//   // }, []);
//   useEffect(() => {
//     const savedState = localStorage.getItem("isSaved");
//     if (savedState === "true") {
//       setIsSaved(true);
//     }
//   }, []);
//   useEffect(() => {
//     // When resumeData changes, set isSaved to false
//     if (isSaved) {
//       setIsSaved(false);
//       localStorage.setItem("isSaved", "false");
//     }
//   }, [resumeData]);

//   useEffect(() => {
//     const handleBeforeUnload = (e) => {
//       if (!isSaved) {
//         e.preventDefault();
//         e.returnValue =
//           "You have unsaved changes. Are you sure you want to leave?";
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [isSaved]);

//   // Rest of the code remains the same...
//   // (Keep all the existing code below this point unchanged)

//   useEffect(() => {
//     const path = window.location.pathname;
//     const id = path.split("/").pop();
//     setResumeId(id);
//   }, []);

//   const sections = [
//     { label: "Personal Details", component: <PersonalInformation /> },
//     { label: "Social Links", component: <SocialMedia /> },
//     { label: "Summary", component: <Summary /> },
//     { label: "Education", component: <Education /> },
//     { label: "Experience", component: <WorkExperience /> },
//     { label: "Projects", component: <Projects /> },
//     {
//       label: "Skills",
//       component: Array.isArray(resumeData?.skills) ? (
//         resumeData.skills.map((skill, index) => (
//           <Skill title={skill.title} key={index} />
//         ))
//       ) : (
//         <p>No skills available</p>
//       ),
//     },
//     { label: "Languages", component: <Language /> },
//     { label: "Certifications", component: <Certification /> },
//   ];

//   const handleProfilePicture = (e) => {
//     const file = e.target.files[0];
//     if (file instanceof Blob) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setResumeData({ ...resumeData, profilePicture: event.target.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (e) => {
//     setResumeData({ ...resumeData, [e.target.name]: e.target.value });
//   };

//   // const handleNext = () => {
//   //   if (currentSection === sections.length - 1) {
//   //     setIsFinished(true);
//   //   } else {
//   //     setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
//   //   }
//   // };
//   // Modify the handleNext function to preserve state
//   const handleNext = () => {
//     if (currentSection === sections.length - 1) {
//       // Save current state before switching to finished mode
//       localStorage.setItem("tempResumeData", JSON.stringify(resumeData));
//       localStorage.setItem("tempHeaderColor", headerColor);
//       localStorage.setItem("tempBgColor", backgroundColorss);
//       localStorage.setItem("tempFont", selectedFont);
//       setIsFinished(true);
//     } else {
//       setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
//     }
//   };

//   // Add effect to restore state when entering finished mode
//   useEffect(() => {
//     if (isFinished) {
//       const tempResumeData = localStorage.getItem("tempResumeData");
//       const tempHeaderColor = localStorage.getItem("tempHeaderColor");
//       const tempBgColor = localStorage.getItem("tempBgColor");
//       const tempFont = localStorage.getItem("tempFont");

//       if (tempResumeData) setResumeData(JSON.parse(tempResumeData));
//       if (tempHeaderColor) setHeaderColor(tempHeaderColor);
//       if (tempBgColor) setBgColor(tempBgColor);
//       if (tempFont) setSelectedFont(tempFont);
//     }
//   }, [isFinished]);

//   // Add cleanup when component unmounts
//   useEffect(() => {
//     return () => {
//       // Clean up temporary storage
//       localStorage.removeItem("tempResumeData");
//       localStorage.removeItem("tempHeaderColor");
//       localStorage.removeItem("tempBgColor");
//       localStorage.removeItem("tempFont");
//     };
//   }, []);
//   const handlePrevious = () => {
//     setCurrentSection((prev) => Math.max(prev - 1, 0));
//   };

//   const handleSectionClick = (index) => {
//     setCurrentSection(index);
//     setIsMobileMenuOpen(false);
//   };

//   const handleFontChange = (e) => {
//     setSelectedFont(e.target.value);
//   };

//   const nextSection = () => {
//     if (currentSection < sections.length - 1) {
//       handleSectionClick(currentSection + 1);
//     }
//   };

//   const prevSection = () => {
//     if (currentSection > 0) {
//       handleSectionClick(currentSection - 1);
//     }
//   };

//   const pdfExportOptions = {
//     paperSize: "A4",
//     fileName: "resume.pdf",
//     author: resumeData.firstName + " " + resumeData.lastName,
//     creator: "ATSResume Builder",
//     date: new Date(),
//     scale: 0.7,
//     forcePageBreak: ".page-break",
//   };

//   const [showModal, setShowModal] = useState(false);
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [phone, setPhone] = useState("");
//   // Fixed price

//   const handleCloseModal = () => setShowModal(false);
//   const handleShowModal = () => setShowModal(true);


//   // const downloadAsPDF = async () => {
//   //   if (!templateRef.current) {
//   //     toast.error("Template reference not found");
//   //     return;
//   //   }

//   //   try {
//   //     // Get HTML and used classes
//   //     const htmlContent = templateRef.current.innerHTML;
//   //     const usedClasses = [...new Set(
//   //       Array.from(templateRef.current.querySelectorAll('*'))
//   //         .flatMap(el => [...el.classList])
//   //     )];

//   //     // Extract relevant CSS
//   //     const cssContent = Array.from(document.styleSheets)
//   //       .flatMap(sheet => {
//   //         try {
//   //           return [...sheet.cssRules]
//   //             .filter(rule => rule.selectorText && 
//   //               usedClasses.some(cls => rule.selectorText.includes(`.${cls}`)))
//   //             .map(rule => rule.cssText);
//   //         } catch {
//   //           return [];
//   //         }
//   //       })
//   //       .join('\n');

//   //     // Generate PDF
//   //     const fullContent = `
//   //       <style>${cssContent}</style>
//   //       <script src="https://cdn.tailwindcss.com"></script>
//   //       ${htmlContent}
//   //     `;

//   //     const response = await axios.post(
//   //       'https://api.resumeintellect.com/api/user/generate-pdf1',
//   //       { html: fullContent },
//   //       {
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //           'Authorization': token
//   //         }
//   //       }
//   //     );

//   //     if (!response.data.data?.file_path) {
//   //       throw new Error('PDF file path not received');
//   //     }

//   //     // Download PDF
//   //     const downloadUrl = `https://api.resumeintellect.com${response.data.data.file_path}`;
//   //     const link = document.createElement('a');
//   //     {console.log(link,downloadUrl,"klink")}
//   //     // link.href = downloadUrl;
//   //     link.download = downloadUrl;
//   //     document.body.appendChild(link);
//   //     link.click();
//   //     document.body.removeChild(link);

//   //     toast.success('PDF generated and downloaded successfully!');

//   //   } catch (error) {
//   //     console.error('PDF generation error:', error);
//   //     toast.error(error.response?.data?.message || 'Failed to generate PDF');
//   //   }
//   // };
//   // const downloadAsPDF = async () => {
//   //   if (!templateRef.current) {
//   //     console.error("Template ref is null");
//   //     toast.error("Failed to generate PDF. Template reference is missing.");
//   //     return;
//   //   }
  
//   //   try {
//   //     const htmlContent = templateRef.current.innerHTML;
  
//   //     // Extract all unique CSS classes used in the template
//   //     const usedClasses = Array.from(templateRef.current.querySelectorAll('*'))
//   //       .flatMap(el => Array.from(el.classList))
//   //       .filter((value, index, self) => self.indexOf(value) === index);
  
//   //     let cssContent = '';
//   //     const styleSheets = document.styleSheets;
  
//   //     // Collect CSS rules for the used classes
//   //     for (let i = 0; i < styleSheets.length; i++) {
//   //       const styleSheet = styleSheets[i];
//   //       try {
//   //         const rules = styleSheet.cssRules || styleSheet.rules;
//   //         for (let j = 0; j < rules.length; j++) {
//   //           const rule = rules[j];
//   //           if (rule.selectorText && usedClasses.some(cls => rule.selectorText.includes(`.${cls}`))) {
//   //             cssContent += rule.cssText + '\n';
//   //           }
//   //         }
//   //       } catch (e) {
//   //         console.warn('Error accessing stylesheet:', e);
//   //       }
//   //     }
  
//   //     // Combine CSS and HTML for the request
//   //     const fullContent = `<style>${cssContent}</style>${htmlContent}`;
  
//   //     // API request to generate the PDF
//   //     const response = await axios.post(
//   //       'https://api.resumeintellect.com/api/user/generate-pdf1',
//   //       { html: `<script src="https://cdn.tailwindcss.com"></script>${fullContent}` },
//   //       {
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //           'Authorization': token,
//   //         },
//   //       }
//   //     );
  
//   //     if (response.data && response.data.data.file_path) {
//   //       const relativePath = response.data.data.file_path;
//   //       const fullPath = `https://api.resumeintellect.com${relativePath}`; // Construct the full URL
  
//   //       // Trigger PDF download
//   //       const link = document.createElement('a');
//   //       // link.href = fullPath;
//   //       link.download = 'Resume.pdf'; // Name of the downloaded file
//   //       document.body.appendChild(link);
//   //       link.click();
//   //       document.body.removeChild(link);
  
//   //       toast.success("PDF generated and download started!");
//   //     } else {
//   //       console.error('Error generating PDF:', response.data);
//   //       toast.error("Failed to generate PDF. Please try again.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     toast.error("An error occurred while processing your request.");
//   //   }
//   // };
  
  
//   // const downloadAsPDF = async () => {
//   //   let amount;

//   //   if (userId == 121 || userId == 1) {
//   //     amount = 1;
//   //   } else {
//   //     amount = 49;
//   //   }

//   //   // Fixed price

//   //   try {
//   //     // Make the payment API call
//   //     const payload = {
//   //       amount,
//   //       ResumeId: resumeId, // Make sure resumeId is defined in your component
//   //       Token: token || "", // Make sure token is defined in your component
//   //     };

//   //     const response = await axios.post(
//   //       "https://api.resumeintellect.com/api/user/paypal/create-payment",
//   //       payload,
//   //       {
//   //         headers: {
//   //           Authorization: token,
//   //           "Content-Type": "application/json",
//   //         },
//   //       }
//   //     );

//   //     const data = response.data;
//   //     // console.log(data, "data");
//   //     if (data && data.data) {
//   //       // Store the order ID for later verification if needed
//   //       const orderId = data.order_id;
//   //       localStorage.setItem("orderid", orderId);

//   //       // Redirect the user to PayPal URL to complete payment
//   //       if (data.data) {
//   //         window.location.href = data.data; // Redirect to PayPal
//   //       } else {
//   //         console.error("Payment URL not found");
//   //       }
//   //     }
//   //   } catch (error) {
//   //     console.error("Payment Error:", error);
//   //     // Handle error (show error message to user)
//   //   }
//   // };

//   // const downloadAsPDF = async () => {
//   //   if (!templateRef.current) {
//   //     console.error("Template ref is null");
//   //     return;
//   //   }

//   //   // let amount = userId == 121 || userId == 1 ? 1 : 49;

//   //   try {
//   //     console.log(templateRef,"templateRef");
//   //     const htmlContent = templateRef.current.innerHTML;
//   //     console.log(htmlContent,"htmlContent");
//   //     const usedClasses = Array.from(templateRef.current.querySelectorAll('*'))
//   //       .flatMap(el => Array.from(el.classList))
//   //       .filter((value, index, self) => self.indexOf(value) === index);

//   //     const styleSheets = document.styleSheets;
//   //     let cssContent = '';

//   //     for (let i = 0; i < styleSheets.length; i++) {
//   //       const styleSheet = styleSheets[i];
//   //       try {
//   //         const rules = styleSheet.cssRules || styleSheet.rules;
//   //         for (let j = 0; j < rules.length; j++) {
//   //           const rule = rules[j];
//   //           if (rule.selectorText && usedClasses.some(cls => rule.selectorText.includes(`.${cls}`))) {
//   //             cssContent += rule.cssText + '\n';
//   //           }
//   //         }
//   //       } catch (e) {
//   //         console.warn('Error accessing stylesheet:', e);
//   //       }
//   //     }

//   //     const fullContent = `<style>${cssContent}</style>${htmlContent}`;
//   //     // console.log(fullContent,"fullContent");
//   //     const response = await axios.post('https://api.resumeintellect.com/api/user/generate-pdf1', 
//   //       { html: ` <script src="https://cdn.tailwindcss.com"></script> ${fullContent}` },
//   //       {
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //           'Authorization': token,
//   //         },
//   //       }
//   //     );

//   //     if (response.data && response.data.file_path) {
//   //       console.log('PDF generated successfully:', response.data.file_path);
//   //     } else {
//   //       console.error('Error generating PDF:', response.data);
//   //     }

//   //     // const payload = {
//   //     //   amount,
//   //     //   ResumeId: resumeId,
//   //     //   Token: token || "",
//   //     // };

//   //     // const paymentResponse = await axios.post(
//   //     //   "https://api.resumeintellect.com/api/user/paypal/create-payment",
//   //     //   payload,
//   //     //   {
//   //     //     headers: {
//   //     //       Authorization: token,
//   //     //       "Content-Type": "application/json",
//   //     //     },
//   //     //   }
//   //     // );

//   //     // const data = paymentResponse.data;
//   //     // if (data && data.data) {
//   //     //   const orderId = data.order_id;
//   //     //   localStorage.setItem("orderid", orderId);

//   //     //   if (data.data) {
//   //     //     window.location.href = data.data; // Redirect to PayPal
//   //     //   } else {
//   //     //     console.error("Payment URL not found");
//   //     //   }
//   //     // }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     toast.error("An error occurred while processing your request.");
//   //   }
//   // };
  // const downloadAsPDF = async () => {
  //   if (!templateRef.current) {
  //     toast.error("Template reference not found");
  //     return;
  //   }
  
  //   try {
  //     // Get HTML and used classes
  //     const htmlContent = templateRef.current.innerHTML;
  //     const usedClasses = [...new Set(
  //       Array.from(templateRef.current.querySelectorAll('*')).flatMap(el => [...el.classList])
  //     )];
  
  //     // Extract relevant CSS
  //     const cssContent = Array.from(document.styleSheets)
  //       .flatMap(sheet => {
  //         try {
  //           return [...sheet.cssRules]
  //             .filter(rule => 
  //               rule.selectorText && usedClasses.some(cls => rule.selectorText.includes(`.${cls}`))
  //             )
  //             .map(rule => rule.cssText);
  //         } catch {
  //           return [];
  //         }
  //       })
  //       .join('\n');
  
  //     // Generate HTML content for PDF
  //     const fullContent = `
  //       <style>${cssContent}</style>
  //       ${htmlContent}
  //     `;
  
  //     // API call to generate the PDF
  //     const response = await axios.post(
  //       'https://api.resumeintellect.com/api/user/generate-pdf1',
  //       { html: ` <script src="https://cdn.tailwindcss.com"></script> ${fullContent}` },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: token,
  //         },
  //       }
  //     );
  
  //     if (!response.data.data?.file_path) {
  //       throw new Error('PDF file path not received');
  //     }
  
  //     // Construct the download URL
  //     const downloadUrl = `https://api.resumeintellect.com${response.data.data.file_path}`;
      
  //     // Fetch the PDF file to handle CORS issues
  //     const fileResponse = await axios.get(downloadUrl, {
  //       responseType: 'blob', // Ensure the response is treated as a binary file
  //     });
  
  //     // Create a Blob URL
  //     const blob = new Blob([fileResponse.data], { type: 'application/pdf' });
  //     const blobUrl = window.URL.createObjectURL(blob);
  
  //     // Download the file
  //     const link = document.createElement('a');
  //     link.href = blobUrl;
  //     link.download = 'GeneratedResume.pdf'; // Name of the file to be downloaded
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  
  //     // Clean up the Blob URL
  //     window.URL.revokeObjectURL(blobUrl);
  
  //     toast.success('PDF generated and downloaded successfully!');
  //   } catch (error) {
  //     console.error('PDF generation error:', error);
  //     toast.error(error.response?.data?.message || 'Failed to generate PDF');
  //   }
  // };
  
  // useEffect(() => {
  //   if (PayerID) {
  //     verifyPayment();
  //   }
  // });
  // const verifyPayment = async () => {
  //   try {
  //     const orderId = localStorage.getItem("orderid");
  //     const token = localStorage.getItem("token");

  //     if (orderId && token && PayerID) {
  //       const response = await axios.get(
  //         `https://api.resumeintellect.com/api/user/paypal/verify-order?orderid=${orderId}`,
  //         {
  //           headers: {
  //             Authorization: token,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (response.data.status === "success") {
  //         setPaymentVerified(true);
  //         toast.success("Payment verified successfully!");

  //         localStorage.removeItem("orderid");

  //         // If verification is successful, trigger PDF download
  //         if (pdfExportComponent.current) {
  //           pdfExportComponent.current.save();
  //         }
  //       } else {
  //         toast.error("Payment verification failed. Please try again.");
  //         router.push("/payment-failed");
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Payment Verification Error:", error);
  //     toast.error(
  //       error?.response?.data?.message || "Payment verification failed"
  //     );
  //     router.push("/payment-failed");
  //   }
  // };

  // const handleFinish = async () => {
  //   if (!resumeData) return;

  //   const templateData = {
  //     templateData: {
  //       name: resumeData.name || "",
  //       position: resumeData.position || "",
  //       contactInformation: resumeData.contact || "",
  //       email: resumeData.email || "",
  //       address: resumeData.address || "",
  //       profilePicture: resumeData.profilePicture || "",
  //       socialMedia:
  //         resumeData.socialMedia?.map((media) => ({
  //           socialMedia: media.platform || "",
  //           link: media.link || "",
  //         })) || [],
  //       summary: resumeData.summary || "",
  //       education:
  //         resumeData.education?.map((edu) => ({
  //           school: edu.school || "",
  //           degree: edu.degree || "",
  //           startYear: edu.startYear || "",
  //           endYear: edu.endYear || "",
  //         })) || [],
  //       workExperience:
  //         resumeData.workExperience?.map((exp) => ({
  //           company: exp.company || "",
  //           position: exp.position || "",
  //           description: exp.description || "",
  //           KeyAchievements: Array.isArray(exp.keyAchievements)
  //             ? exp.keyAchievements
  //             : [exp.keyAchievements || ""],
  //           startYear: exp.startYear || "",
  //           endYear: exp.endYear || "",
  //         })) || [],
  //       projects:
  //         resumeData.projects?.map((project) => ({
  //           title: project.title || "",
  //           link: project.link || "",
  //           description: project.description || "",
  //           keyAchievements: Array.isArray(project.keyAchievements)
  //             ? project.keyAchievements
  //             : [project.keyAchievements || ""],
  //           startYear: project.startYear || "",
  //           endYear: project.endYear || "",
  //           name: project.name || "",
  //         })) || [],
  //       skills: Array.isArray(resumeData.skills)
  //         ? resumeData.skills.map((skill) => ({
  //             title: skill.title || "",
  //             skills: skill.skills || [],
  //           }))
  //         : [],
  //       languages: resumeData.languages || [],
  //       certifications: resumeData.certifications || [],
  //       // Add template information
  //       templateDetails: {
  //         templateId: selectedTemplate,
  //         backgroundColor: backgroundColorss || "",
  //         font: selectedFont || "Ubuntu",
  //       },
  //     },
  //   };
//     // console.log(templateData, "templateData");
//     await handleAction(async () => {
//       try {
//         const id = router.query.id || localStorage.getItem("resumeId");
//         if (!id) {
//           console.error("Resume ID not found.");
//           return;
//         }

//         const url = `https://api.resumeintellect.com/api/user/resume-update/${id}`;
//         const response = await axios.put(url, templateData, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//         });

//         // console.log("Resume updated successfully:", response.data);
//         if (response.data.code === 200 || response.data.status === "success") {
//           setIsSaved(true);
//           localStorage.setItem("isSaved", "true");
//           toast.success(response.data.message || "Resume saved Successfully");
//         } else {
//           toast.error(response.data.error || "Error while saving the Resume");
//         }
//       } catch (error) {
//         toast.error(error?.message || "Error !!");
//         console.error("Error updating resume:", error);
//       }
//     });
//   };

//   // console.log(resumeData, "Resumedata");

//   const MobileNavigation = () => (
//     <div className="fixed px-2 bottom-0 left-0 right-0 bg-white shadow-lg py-4 md:hidden">
//       <div className="flex justify-between items-center">
//         <button
//           onClick={handlePrevious}
//           disabled={currentSection === 0}
//           className="px-4 py-2 bg-blue-950 text-white rounded-lg disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-sm font-medium">
//           {sections[currentSection].label}
//         </span>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-yellow-500 text-black rounded-lg"
//         >
//           {currentSection === sections.length - 1 ? "Finish" : "Next"}
//         </button>
//       </div>
//     </div>
//   );

//   const MobileMenu = () => (
//     <div className="md:hidden">
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-white z-40 p-4 pt-16">
//           <div className="overflow-y-auto h-full">
//             {sections.map((section, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleSectionClick(index)}
//                 className={`w-full p-3 mb-2 rounded-lg text-left ${
//                   currentSection === index
//                     ? "bg-blue-950 text-white"
//                     : "bg-gray-100 text-blue-950"
//                 }`}
//               >
//                 {section.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
//   const handleBackToEditor = () => {
//     // Save current state before switching back
//     localStorage.setItem("tempResumeData", JSON.stringify(resumeData));
//     localStorage.setItem("tempHeaderColor", headerColor);
//     localStorage.setItem("tempBgColor", backgroundColorss);
//     localStorage.setItem("tempFont", selectedFont);
//     setIsFinished(false);
//     setCurrentSection(0); // Optionally reset to first section
//   };

//   // Return your existing JSX

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         // Fetch user profile
//         const userProfileResponse = await axios.get(
//           "https://api.resumeintellect.com/api/user/user-profile",
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );

//         if (userProfileResponse.data.status === "success") {
//           const userData = userProfileResponse.data.data;
//           setFormData((prevData) => ({
//             ...prevData,
//             first_name: userData.first_name || "",
//             last_name: userData.last_name || "",

//             phone: userData.phone || "",
//             email: userData.email || "",
//           }));
//         }
//       } catch (error) {
//         console.error("An error occurred while fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     // <ResumeProvider
//     //   value={{
//     //     resumeData,
//     //     setResumeData,
//     //     handleProfilePicture,
//     //     handleChange,
//     //     headerColor,
//     //     backgroundColorss,
//     //     selectedFont,
//     //   }}
//     // >
// <>
//       {/* // {console.log(resumeData,"<<L<L")} */}
//       <Meta
//         title="ATSResume | Get hired with an ATS-optimized resume"
//         description="ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes..."
//         keywords="ATS-friendly, Resume optimization..."
//       />

//       <div className="min-h-screen bg-gray-50">
//         {/* Mobile Components */}
//         <MobileMenu />

//         {!isFinished ? (
//           <div className="min-h-screen bg-gray-50 flex flex-col">
//             {/* <LoadUnload /> */}
//             {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//               <MyResume />
//             </Modal> */}
//             {/* Form Navigation Bar */}
//             <div className="w-full bg-gray-200 p-4 shadow-sm">
//               <div className="hidden md:flex flex-col lg:flex-row items-center justify-between gap-4">
//                 {/* Navigation Buttons */}
//                 <div className="flex w-full lg:w-auto gap-4">
//                   <button
//                     type="button"
//                     onClick={handlePrevious}
//                     disabled={currentSection === 0}
//                     className="w-40 h-10 rounded-lg bg-blue-950 text-white font-medium transition hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Previous
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleNext}
//                     className="w-40 h-10 rounded-lg bg-yellow-500 text-black font-medium transition hover:bg-yellow-400"
//                   >
//                     {currentSection === sections.length - 1 ? "Finish" : "Next"}
//                   </button>
//                 </div>

//                 {/* Controls Group */}
//                 <div className="hidden lg:flex items-center gap-4">
//                   <select
//                     value={selectedFont}
//                     onChange={handleFontChange}
//                     className="w-40 h-10 rounded-lg border border-blue-800 px-4 font-bold text-blue-800 bg-white focus:ring-2 focus:ring-blue-800"
//                   >
//                     <option value="Ubuntu">Ubuntu</option>
//                     <option value="Calibri">Calibri</option>
//                     <option value="Georgia">Georgia</option>
//                     <option value="Roboto">Roboto</option>
//                     <option value="Poppins">Poppins</option>
//                   </select>

//                   <div className="flex items-center gap-4">
//                     <ColorPicker
//                       selectedColor={headerColor}
//                       onChange={setHeaderColor}
//                     />
//                     <ColorPickers
//                       selectmultiplecolor={backgroundColorss}
//                       onChange={setBgColor}
//                     />
//                     <TemplateSelector
//                       selectedTemplate={selectedTemplate}
//                       setSelectedTemplate={setSelectedTemplate}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sticky Top Navigation */}
//             <div className="sticky top-0 z-10 w-full bg-white shadow-sm">
//               <div className="hidden md:flex justify-center items-center p-4">
//                 <nav className="bg-gray-100 rounded-lg p-2">
//                   <div className="flex items-center">
//                     <button
//                       onClick={() => prevSection()}
//                       className="p-2 hover:bg-gray-200 rounded-lg hidden md:block"
//                       disabled={currentSection === 0}
//                     >
//                       {/* Chevron Left Icon Here */}
//                     </button>

//                     <div className="flex-1 overflow-x-auto scrollbar-hide ">
//                       <ul className="flex flex-row gap-3 items-center py-2 px-4  ">
//                         {sections.map((section, index) => (
//                           <li
//                             key={index}
//                             className={`px-4 py-2 cursor-pointer transition rounded-lg border-2 ${
//                               currentSection === index
//                                 ? "border-blue-800 font-semibold bg-blue-950 text-white"
//                                 : "border-blue-800 bg-white text-blue-800 hover:bg-blue-50"
//                             }`}
//                             onClick={() => handleSectionClick(index)}
//                           >
//                             {section.label}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <button
//                       onClick={() => nextSection()}
//                       className="p-2 hover:bg-gray-200 rounded-lg hidden md:block"
//                       disabled={currentSection === sections.length - 1}
//                     >
//                       {/* Chevron Right Icon Here */}
//                     </button>
//                   </div>
//                 </nav>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex flex-col md:flex-row flex-grow ">
//               {/* Sidebar */}
//               {/* <aside className="hidden md:block w-64 min-h-screen border-r bg-gray-100">
//                     <div className="sticky top-20 p-4">
//                       <Sidebar />
//                     </div>
//                   </aside> */}
//               <button
//                 onClick={toggleMobileSidebar}
//                 className="fixed z-40 bottom-20 right-4 md:hidden bg-blue-950 text-white p-3 rounded-full shadow-lg"
//               >
//                 {isMobileSidebarOpen ? (
//                   <X className="h-6 w-6 stroke-2" />
//                 ) : (
//                   <Menu className="h-6 w-6 stroke-2" />
//                 )}
//               </button>

//               {/* Mobile Sidebar Overlay */}
//               {isMobileSidebarOpen && (
//                 <div
//                   className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//                   onClick={toggleMobileSidebar}
//                 />
//               )}

//               {/* Updated Sidebar */}
//               <aside
//                 className={`fixed md:static left-0 top-0 h-full z-10 transform 
//                                 ${
//                                   isMobileSidebarOpen
//                                     ? "translate-x-0"
//                                     : "-translate-x-full"
//                                 } 
//                                 md:translate-x-0 transition-transform duration-300 ease-in-out 
//                                 w-64 bg-gray-100 border-r`}
//               >
//                 <div className="sticky top-20 p-4 overflow-y-auto h-full">
//                   {/* Mobile Close Button */}
//                   {/* <button
//                                     onClick={toggleMobileSidebar}
//                                     className="absolute top-4 right-4 md:hidden text-gray-500 hover:text-gray-700"
//                                 >
//                                     <Menu className="h-6 w-6" />
//                                 </button> */}

//                   {/* Sidebar Content */}
//                   <div className="mt-12 md:mt-0">
//                     <Sidebar />
//                   </div>
//                 </div>
//               </aside>

//               {/* Form Content */}
//               <main className="flex-1 max-w-2xl mx-auto md:p-4">
//                 <form>{sections[currentSection].component}</form>
//               </main>

//               {/* Preview Panel */}
//               <aside className="hidden md:block w-1/2 min-h-screen border-l bg-gray-50">
//                 <div className="sticky top-20 p-4">
//                   <PDFExport ref={pdfExportComponent} {...pdfExportOptions}>
//                     <Preview ref={templateRef} selectedTemplate={selectedTemplate} />
//                   </PDFExport>
//                 </div>
//               </aside>
//             </div>

//             {/* Mobile Navigation */}
//             <MobileNavigation />
//           </div>
//         ) : (
//           // Finished State
//           <div className=" flex flex-col">
//             {/* Mobile Finished Controls */}
//             <div className="flex flex-col gap-1 p-2 md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
//               <LoaderButton
//                 isLoading={isLoading}
//                 onClick={handleFinish}
//                 className="bg-blue-950 text-white px-4 py-2 rounded-lg"
//               >
//                 Save Resume
//               </LoaderButton>

//               <button
//                 onClick={downloadAsPDF}
//                 className=" bg-red-500 text-black px-4 py-2 rounded-lg"
//               >
//                 Pay & Downloaddd
//               </button>
//               {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                   <div className="w-full max-w-[90%] sm:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden max-h-screen overflow-y-auto">
//                     {/* Logo and Close Button */}
//                     <div className="flex justify-between items-center p-4 border-b">
//                       <Image src={logo} alt="logo" className="h-8 w-auto" />
//                       <button
//                         className="text-gray-600 hover:text-gray-800"
//                         onClick={handleCloseModal}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="2"
//                           stroke="currentColor"
//                           className="w-6 h-6"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M6 18L18 6M6 6l12 12"
//                           />
//                         </svg>
//                       </button>
//                     </div>

//                     {/* Modal Content */}
//                     <div className="flex flex-col md:flex-row">
//                       {/* Image Section */}
//                       <div className="w-full md:w-1/2 p-4 flex justify-center">
//                         <div className=" sm:w-80 sm:h-80">
//                           <Image
//                             src={resumeImg}
//                             alt="resumeimg"
//                             className="w-full h-full object-cover rounded-lg"
//                           />
//                         </div>
//                       </div>

//                       {/* Form Section */}
//                       <div className="w-full md:w-1/2 p-4">
//                         <div className="text-center mb-6">
//                           <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
//                             $49
//                           </h2>
//                           <p className="text-sm text-gray-500">Total Amount</p>
//                         </div>

//                         <form>
//                           <div className="mb-4">
//                             <label className="block text-gray-800 mb-2">
//                               👨🏻‍💼 Name
//                             </label>
//                             <input
//                               type="text"
//                               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                               value={`${formData.first_name} ${formData.last_name}`.trim()}
//                               name="full name"
//                               required
//                               disabled
//                             />
//                           </div>

//                           <div className="mb-4">
//                             <label className="block text-gray-800 mb-2">
//                               📧 Email
//                             </label>
//                             <input
//                               type="email"
//                               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                               value={formData.email}
//                               name="email"
//                               required
//                               disabled
//                             />
//                           </div>

//                           <div className="mb-4">
//                             <label className="block text-gray-800 mb-2">
//                               ☎️ Phone
//                             </label>
//                             <input
//                               type="number"
//                               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                               name="phone"
//                               value={formData.phone}
//                               required
//                               disabled
//                             />
//                           </div>

//                           {/* Submit Button */}
//                           <div className="flex justify-center mt-6">
//                             <button
//                               onClick={handleDownload}
//                               type="submit"
//                               className="w-full bg-yellow-400 text-blue-800 font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200 flex items-center justify-center"
//                             >
//                               <Image
//                                 src={paypal}
//                                 alt="paypal"
//                                 className="h-10 w-auto m-auto "
//                               />
//                             </button>
//                           </div>
//                           <div className="flex justify-center mt-6">
//                             <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
//                               <Image
//                                 src={applepay}
//                                 alt="apple pay"
//                                 className=" w-auto m-auto h-10"
//                               />
//                             </button>
//                           </div>
//                           <div className="flex justify-center mt-6">
//                             <Image
//                               src={poweredbypaypal}
//                               alt="poweredbypaypal"
//                               className="h-8 w-auto"
//                             />
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <button
//                 onClick={handleBackToEditor}
//                 className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
//               >
//                 Back to Dashboard
//               </button>
//             </div>

//             {/* Desktop Controls - Hidden on Mobile */}
//             <div className="hidden md:flex w-screen px-8 py-4 justify-between items-center bg-white shadow">
//               <div className="flex gap-4">
//                 <select
//                   value={selectedFont}
//                   onChange={handleFontChange}
//                   className="px-4 py-2 border rounded-lg"
//                 >
//                   <option value="Ubuntu">Ubuntu</option>
//                   <option value="Calibri">Calibri</option>
//                   <option value="Georgia">Georgia</option>
//                   <option value="Roboto">Roboto</option>
//                   <option value="Poppins">Poppins</option>
//                 </select>
//                 <ColorPicker
//                   selectedColor={headerColor}
//                   onChange={setHeaderColor}
//                 />
//                 <ColorPickers
//                   selectmultiplecolor={backgroundColorss}
//                   onChange={setBgColor}
//                 />
//                 <TemplateSelector
//                   selectedTemplate={selectedTemplate}
//                   setSelectedTemplate={setSelectedTemplate}
//                 />
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   onClick={handleFinish}
//                   className="bg-blue-950 text-white px-6 py-2 rounded-lg"
//                 >
//                   Save Resume
//                 </button>
//                 <button
//                   onClick={downloadAsPDF}
//                   className="bg-yellow-500 text-black px-6 py-2 rounded-lg"
//                 >
//                   Pay & Download
//                 </button>
//                 {showModal && (
//                   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                     <div className=" w-full max-w-4xl bg-white rounded-lg shadow-lg ">
//                       {/* Logo */}
//                       <div className="flex justify-between items-center p-2">
//                         <Image src={logo} alt="logo" className="h-10 w-auto" />
//                         {/* Close Button */}
//                         <button
//                           className=" text-gray-600 hover:text-gray-800 z-20"
//                           onClick={handleCloseModal}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="2"
//                             stroke="currentColor"
//                             className="w-6 h-6"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                       <div className="flex flex-col md:flex-row">
//                         {/* Image Section */}
//                         <div className="md:w-1/2 w-full p-4  ">
//                           <div className="w-[400px] h-[400px]">
//                             <Image
//                               src={resumeImg}
//                               alt="resumeimg"
//                               className="w- full h-full rounded-l-lg"
//                             />
//                           </div>
//                         </div>

//                         {/* Right Section: Form */}
//                         <div className="md:w-1/2 w-full p-4 ">
//                           <div className="text-center mb-6">
//                             <h2 className="text-2xl font-bold text-gray-900">
//                               $49
//                             </h2>
//                             <p className="text-sm text-gray-500">
//                               Total Amount
//                             </p>
//                           </div>

//                           <form>
//                             <div className="mb-4">
//                               <label className="block text-gray-800 mb-2">
//                                 👨🏻‍💼 Name
//                               </label>
//                               <input
//                                 type="text"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 // value={formData.first_name}
//                                 value={`${formData.first_name} ${formData.last_name}`.trim()}
//                                 name="full name"
//                                 // onChange={(e) => setName(e.target.value)}
//                                 required
//                                 disabled
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label className="block text-gray-800 mb-2">
//                                 📧 Email
//                               </label>
//                               <input
//                                 type="email"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 value={formData.email}
//                                 // onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 name="email"
//                                 disabled
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label className="block text-gray-800 mb-2">
//                                 ☎️ Phone
//                               </label>
//                               <input
//                                 // type="tel"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                                 // value={phone}
//                                 // onChange={(e) => setPhone(e.target.value)}
//                                 required
//                                 disabled
//                                 type="number"
//                                 name="phone"
//                                 value={formData.phone}
//                               />
//                             </div>

//                             {/* Submit Button */}
//                             <div className="flex justify-center mt-6">
//                               <button
//                                 onClick={downloadAsPDF}
//                                 type="submit"
//                                 className="w-full bg-yellow-400 text-blue-800 font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200"
//                               >
//                                 <Image
//                                   src={paypal}
//                                   alt="paypal"
//                                   className="h-10 w-auto m-auto"
//                                 />
//                               </button>
//                             </div>
//                             <div className="flex justify-center mt-6">
//                               <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
//                                 <Image
//                                   src={applepay}
//                                   alt="apple pay"
//                                   className=" w-auto m-auto h-10"
//                                 />
//                               </button>
//                             </div>
//                             <div className="flex justify-center mt-6 ">
//                               <Image
//                                 src={poweredbypaypal}
//                                 alt="poweredbypaypal"
//                                 className="h-10 w-auto"
//                               />
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <button
//                   onClick={handleBackToEditor}
//                   className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
//                 >
//                   Back to Dashboard
//                 </button>
//               </div>
//             </div>

//             {/* Preview */}
//             <div className="pb-28 mb-8 z-50">
//               <PDFExport ref={pdfExportComponent} {...pdfExportOptions}>
//                 <Preview ref={templateRef} selectedTemplate={selectedTemplate} />
//               </PDFExport>
//             </div>
//           </div>
//         )}
//       </div>
//     {/* </ResumeProvider> */}

// </>
//   );
// }

// // export { ResumeContext };


export default function Builder() {

  return(
    <>
    <div className="block md:hidden">
    <MobileBuilder />
    </div>
    <div className="hidden md:block">
    <WebBuilder />
    </div>   
    </>
  )
}