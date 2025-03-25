import { Mail } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import FullScreenLoader from "../ResumeLoader/Loader";
import { useTranslation } from "react-i18next";
const CoverLetterSection = ({ letterCount }) => {
  const [showLoader, setShowLoader] = useState(false); // State to control loader visibility
  const router = useRouter();
  const { t } = useTranslation();
  const handleClick = () => {
    setShowLoader(true); // Show the loader
    setTimeout(() => {
      router.push("/dashboard/cvletterlist"); // Navigate after 3 seconds
    }, 2000); // 3-second delay
  };
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              {t("dashboard_cvletter.yourCoverLetters")}
            </h3>
            {/* <p className="text-gray-600">Cover Letter: Letter_1</p> */}
          </div>
        </div>
        <button
          onClick={handleClick}
          className="px-6 py-2 border border-[#00b38d] text-[#00b38d] rounded-lg hover:bg-blue-50"
        >
          {t("dashboard_cvletter.viewCoverLetters")}
        </button>
      </div>
    </div>
  );
};

export default CoverLetterSection;
