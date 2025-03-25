import { useContext, useRef } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { HighlightMenu } from "react-highlight-menu";
import ContactInfo from "./ContactInfo";
import { CgWebsite } from "react-icons/cg";
import DateRange from "../utility/DateRange";
import Language from "./Language";
import Skills from "./Skills";
import Certification from "./Certification";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBold,
  FaItalic,
  FaPlus,
  FaMinus,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaLink,
  FaUnderline,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import dynamic from "next/dynamic";
import ContactAndSocialMedia from "./ContactAndSocial";
import { SummaryWrapper, TextWrapper, ImageWrapper } from "./Common";
import { SkillsWrapper } from "./SkillWrapper";
import WorkExperience from "./WorkExperience";
import ProjectsSection from "./ProjectSection";
import EducationSection from "./Education";

const DragDropContext = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.DragDropContext),
  { ssr: false }
);
const Droppable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Droppable),
  { ssr: false }
);
const Draggable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Draggable),
  { ssr: false }
);

const Template11 = () => {
  const templateRef = useRef(null);

  const extractHtml = () => {
    const htmlContent = templateRef.current?.outerHTML;
    console.log(htmlContent);
    return htmlContent;
  };

  const { resumeData, setResumeData, headerColor, backgroundColorss } =
    useContext(ResumeContext);

  const icons = [
    { name: "github", icon: <FaGithub /> },
    { name: "linkedin", icon: <FaLinkedin /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "youtube", icon: <FaYoutube /> },
    { name: "website", icon: <CgWebsite /> },
  ];

  return (
    <div
      ref={templateRef}
      // className="max-w-4xl mx-auto bg-white border border-gray-200"
    >
      <div
        style={{ borderBottom: `2px solid ${backgroundColorss}` }}
        className={`mb-6 ${
          resumeData?.profilePicture
            ? "flex justify-start items-center gap-4"
            : "flex justify-center items-center "
        } px-16 py-4`}
      >
        {resumeData?.profilePicture && (
          <ImageWrapper
            src={resumeData.profilePicture}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full"
          />
        )}
        <TextWrapper
          name={resumeData?.name}
          position={resumeData?.position}
          className={
            resumeData?.profilePicture
              ? "justify-start items-start"
              : "text-center"
          }
          headerColor={backgroundColorss}
          orientation="column"
        />
      </div>

      <div className="container mx-auto flex bg-white shadow-lg">
        {/* Left Column */}
        <div
          className="right-column w-4/12 bg-gray-100 p-8"
          style={{ backgroundColor: backgroundColorss }}
        >
          <div className="flex flex-col gap-4">
            <ContactAndSocialMedia
              title="Contacts"
              contactData={{
                teldata: resumeData.contactInformation,
                emaildata: resumeData.email,
                addressdata: resumeData.address,
              }}
              socialMediaData={resumeData.socialMedia}
              icons={icons}
              layout="column"
              contactClass=""
              socialMediaClass=""
              textColor="text-white"
            />
            <div></div>
            <SkillsWrapper
              skills={resumeData.skills}
              headerColor={backgroundColorss ? "white" : "black"}
              droppableId="skills-section-1"
              className="mt-4"
              layout="column"
            />
            <Language
              title="Languages"
              languages={resumeData.languages}
              headerColor={backgroundColorss ? "white" : "black"}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="left-column w-8/12 p-8 border-r border-gray-300">
          {/* Header Section with TextWrapper and conditional ImageWrapper */}

          {/* Rest of the left column content */}
          <div className="flex flex-col gap-4">
            <div className="col-span-2 space-y-2">
              <SummaryWrapper
                summary={resumeData.summary}
                headerColor={"black"}
                editable={true}
                className="mt-4"
              />
              <WorkExperience
                itemClassNames={{
                  title: "text-lg font-bold mb-1 editable",
                  company: "",
                  position: "",
                  location: "",
                }}
                resumeData={resumeData}
                headerColor={backgroundColorss}
              />
              <ProjectsSection
                resumeData={resumeData}
                headerColor={backgroundColorss}
              />

              <EducationSection
                itemClassNames={{
                  school: "",
                  degree: "",
                  location: "",
                }}
                layout="column"
                educationData={resumeData?.education}
                headerColor={backgroundColorss ? "black" : "white"}
              />

              <Certification
                title="Certifications"
                certifications={resumeData.certifications}
                hasBullet={true}
                headerColor={backgroundColorss ? "black" : "white"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template11;
