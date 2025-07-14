// components/Footer.tsx
"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      heading: "Abroadium",
      links: [
        "About Us",
        "Careers",
        "Placement Support",
        "Abroadium Blog",
        "Abroadium Tutorials",
        "Resources",
      ],
    },
    {
      heading: "Support",
      links: [
        "Support",
        "Contact",
        "Salary Tool",
        "Grievance Redressal",
        "Terms & Conditions",
        "Privacy Policy",
        "Refund Policy",
      ],
    },
    {
      heading: "Scope & Products",
      links: [
        "AI Resume Builder",
        "AI Skill Tests",
        "AI CV Parsing",
        "Generative AI",
        "White Labelling",
      ],
    },
    {
      heading: "AI Resources",
      links: [
        "AI - Resume Accuracy",
        "AI - Resume Enhancer",
        "AI - Job Match & Apply",
        "Verified Jobs",
        "Verified Profiles",
        "& Much More",
      ],
    },
  ];

  return (
    <footer className="bg-background pt-16 text-text">
      <div className="max-w-8xl mx-auto px-4 space-y-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo */}
          <div className="bg-surface h-24 w-64 px-6  flex items-center justify-center">
            <p className="text-xl md:text-[52px] font-bold text-primary">Genesis Live AI</p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-4">Social Media</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-surface hover:bg-gray-100 rounded-full p-3 transition cursor-pointer shadow-sm"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-[300px] text-center md:text-left">
            <p className="text-lg font-semibold mb-4">Get Our Weekly</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 pr-28 pl-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded text-base md:text-md"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Link Sections */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-3">{section.heading}</h4>
              <ul className="space-y-2 text-base md:text-md text-gray-700">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-primary cursor-pointer transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-white mt-16 py-4 text-center text-sm">
        © Copyright By Genesis Live AI.com All Rights Reserved
      </div>
    </footer>
  );
}
