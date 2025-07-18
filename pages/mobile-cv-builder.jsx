import React, { useState, useRef } from "react";
import { ArrowLeft, Download, Save } from "lucide-react";
import TemplateSelector from "../components/cv/coverletter/CvSelector";
import CoverLetterEditor from "../components/cv/coverletterform/CoverLetterEditor";
import Navbar from "./Navbar/Navbar";
import ColorPickers from "./ColorPickers";
import CoverLetterPreview from "../components/cv/coverletter/CoverLetterPreview";
import { useTranslation } from "react-i18next";

const MobileCoverLetterBuilder = ({
  selectedFont,
  handleFontChange,
  backgroundColorss,
  setBgColor,
  selectedTemplate,
  setSelectedTemplate,
  handleFinish,
  downloadAsPDF,
  templateRef,
}) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [selectedPdfType, setSelectedPdfType] = useState("1");
  const { t } = useTranslation();
  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <Navbar />
      </div>

      {!isPreviewMode ? (
        // Form Mode
        <div className="flex flex-col min-h-screen bg-[#e5e7eb]">
          {/* Editor Section */}
          <div className="flex-grow p-4">
            <CoverLetterEditor />
          </div>

          {/* Next Button */}
          <div className="sticky bottom-0 w-full p-4 bg-white shadow-t">
            <button
              onClick={togglePreviewMode}
              className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              {t("navigation.next")}
            </button>
          </div>
        </div>
      ) : (
        // Preview Mode
        <div className="flex flex-col min-h-screen bg-gray-50">
          {/* Sticky Options Bar */}
          <div className="sticky top-[64px] z-40 bg-gray-200 p-4 shadow-sm">
            <div className="flex items-center absolute justify-center gap-2 p-2  top-26 left-0 right-0 bg-white shadow-lg ">
              {/* Font Selector */}
              <select
                value={selectedFont}
                onChange={handleFontChange}
                className=" h-10 rounded-lg border border-green-500 px-4 font-bold text-black bg-white"
              >
                <option value="Ubuntu">Ubuntu</option>
                <option value="Calibri">Calibri</option>
                <option value="Georgia">Georgia</option>
                <option value="Roboto">Roboto</option>
                <option value="Poppins">Poppins</option>
              </select>

              {/* Color Picker */}
              <ColorPickers
                selectmultiplecolor={backgroundColorss}
                onChange={setBgColor}
              />

              {/* Template Selector */}
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                selectedPdfType={selectedPdfType}
                setSelectedPdfType={setSelectedPdfType}
              />
            </div>
          </div>

          {/* Preview Content */}
          <div className=" ">
            <CoverLetterPreview
              selectedTemplate={selectedTemplate}
              ref={templateRef}
            />
          </div>

          {/* Fixed Bottom Actions */}
          {/* <div className="sticky bottom-0 w-full bg-white shadow-t p-4"> */}
          <div className="flex items-center justify-center gap-4 p-2 fixed bottom-0 left-0 right-0 bg-white shadow-lg">
            <button
              onClick={togglePreviewMode}
              className="w-full flex items-center justify-center gap-2 bg-gray-400 text-white px-6 py-3 rounded-lg"
            >
              <ArrowLeft size={20} />
              {/* Back to Editor */}
            </button>
            <button
              onClick={handleFinish}
              className="w-full flex items-center justify-center gap-2 bg-[#369984] text-white px-6 py-3 rounded-lg"
            >
              <Save size={20} />
              {/* Save Cover Letter */}
            </button>
            <button
              onClick={downloadAsPDF}
              className="w-full flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg"
            >
              <Download size={20} />
              {/* Download */}
            </button>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default MobileCoverLetterBuilder;
