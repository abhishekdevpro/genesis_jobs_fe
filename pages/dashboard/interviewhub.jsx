import React from "react";

const InterviewPreparationHub = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold">Interview Preparation Hub</h1>
        <p className="text-gray-600 mt-2">
          Share your career goals or upcoming interview details, and let our AI
          craft a customized set of targeted questions and answers just for you.
          This personalized approach ensures you’ll walk into every interview
          with clarity, confidence, and the competitive edge you need. Get ready
          to prepare smarter and step closer to your dream job.
        </p>
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Showcase your professionalism</h2>
          <p className="text-gray-600 mt-2">
            Clarify the position you are applying for and the target company
            name, demonstrating your clear career goals and focus.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">
            Improve the specificity of your preparation
          </h2>
          <p className="text-gray-600 mt-2">
            Upload a resume or tell us about yourself, and we’ll take it from
            there.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">
            Demonstrate your interest in the company
          </h2>
          <p className="text-gray-600 mt-2">
            Upload a resume or tell us about yourself, and we’ll take it from
            there.
          </p>
        </div>
      </div>

      {/* No Interview Roles Found Section */}
      <div className="flex flex-col items-center justify-center mt-12 bg-white p-6 rounded-lg shadow-md">
        <img src="/no-roles-found.png" alt="No roles found" className="w-32" />
        <h2 className="text-xl font-semibold mt-4">No Interview Roles Found</h2>
        <p className="text-gray-600 mt-2 text-center">
          Click the Prepare button to create your first interview role.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          + Prepare
        </button>
      </div>
    </div>
  );
};

export default InterviewPreparationHub;
