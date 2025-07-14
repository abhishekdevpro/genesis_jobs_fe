import { Video, Users, VideoOff } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#0F172A] text-white min-h-[calc(100vh-5rem)] flex items-center px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center w-full">
        {/* Heading */}
        <h1 className="text-xl md:text-[52px] font-extrabold leading-tight mb-6">
          Interview Prep &{" "}
          <span className="relative inline-block text-primary">
            Copilot
            {/* SVG Underline */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 20"
              className="absolute bottom-0 left-0 w-full h-4 md:h-6"
              preserveAspectRatio="none"
            >
              <path
                d="M5 15 Q50 0, 100 12 T 195 10"
                stroke="#FACC15"
                strokeWidth="4"
                fill="none"
              />
            </svg> */}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-md md:text-md text-gray-300 max-w-3xl mx-auto mb-10">
          AI Interview Assistant for real-time support. Unlimited sessions,
          dual responses, and cutting-edge AI models.
        </p>

        {/* Icons */}
        <div className="flex justify-center items-center gap-6 md:gap-10">
          <div className="bg-white rounded-full p-4">
            <Video className="text-primary w-8 h-8" />
          </div>
          <div className="bg-white rounded-full p-4">
            <Users className="text-primary w-8 h-8" />
          </div>
          <div className="bg-white rounded-full p-4">
            <VideoOff className="text-primary w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
