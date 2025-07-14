import { useState } from 'react';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

 const faqs = [
  {
    question: "What is Genesis Live AI and how does it enhance my job application?",
    answer:
      "Genesis Live AI is an AI-powered platform designed to streamline your job application process by offering intelligent resume templates, personalized cover letters, and tailored recommendations to help you stand out."
  },
  {
    question: "How does Genesis Live AI improve my chances of getting hired?",
    answer:
      "Genesis Live AI uses advanced algorithms and real-time feedback to ensure your resume is ATS-optimized, highlights your key achievements, and aligns with the specific requirements of the role you're applying for."
  },
  {
    question: "Can Genesis Live AI help if I don't know where to start with my resume?",
    answer:
      "Absolutely. Genesis Live AI guides you step-by-step through building a compelling resume — even from scratch — by offering content suggestions and examples based on your background and career goals."
  },
  {
    question: "What makes Genesis Live AI different from other resume tools?",
    answer:
      "Unlike generic resume builders, Genesis Live AI adapts to your industry, experience level, and goals. It combines design flexibility with powerful AI assistance for truly customized and professional results."
  },
  {
    question: "Does Genesis Live AI support industry-specific resume formats?",
    answer:
      "Yes. Genesis Live AI provides templates and writing assistance tailored to a wide range of industries — from tech and finance to design and healthcare — so your application aligns with what recruiters expect."
  },
  {
    question: "Can I collaborate with others using Genesis Live AI?",
    answer:
      "With Genesis Live AI, you can share your resume drafts with mentors, friends, or career coaches to receive real-time feedback and make improvements before submitting your application."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <div className='max-w-8xl bg-white mx-auto'>
        <div className="max-w-4xl mx-auto p-8 bg-white">
      <h1 className="md:text-[50px] font-bold text-center mb-8">
        Frequently <span className="text-primary">Asked</span> Questions
      </h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
            >
              <h3 className="md:text-[28px] font-medium text-primary pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <div className="w-8 h-8 border border-primary  rounded-full flex items-center justify-center">
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                ) : (
                  <div className="w-8 h-8  rounded-full border border-primary flex items-center justify-center">
                    <Minus className="w-5 h-5 text-primary" />
                  </div>
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4 bg-gray-50">
                <p className="text-[18px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
      </div>
    </>
  );
}