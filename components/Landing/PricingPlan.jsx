import React from "react";
import { Check } from "lucide-react";
import Button from "../../ui/Button";

const PricingComponent = () => {
  const pricingPlans = [
    {
      id: "free",
      name: "Free Plan",
      target: "For individuals",
      price: "Free",
      period: "/monthly",
      description:
        "Start with the basics. Ideal for individuals testing the platform.",
      features: [
        "Unlimited Resume Edits",
        "Download in PDF",
        "Interactive Dashboard",
        "2 Unique Resume Templates",
      ],
      buttonText: "Get started",
      isPopular: false,
    },
    {
      id: "single",
      name: "Single Pass",
      target: "For professionals",
      price: "CAD49",
      period: "/once",
      description:
        "A one-time upgrade to access advanced features and templates.",
      features: [
        "Everything in Free +",
        "27 Unique Resume Templates",
        "5 Color Options & 6 Fonts",
        "Resume Parsing (ATS-Friendly)",
      ],
      buttonText: "Get started",
      isPopular: true,
    },
    {
      id: "yearly",
      name: "AI Pro Yearly",
      target: "For power users",
      price: "CAD499",
      period: "/year",
      description:
        "Full access to AI features and premium templates all year round.",
      features: [
        "Everything in Free +",
        "37 Unique Resume Templates",
        "8 Color Options & 6 Fonts",
        "Resume Parsing (ATS-Friendly)",
      ],
      buttonText: "Get started",
      isPopular: false,
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[48px] font-bold text-gray-900">
            Flexible <span className="text-primary">Pricing Plans</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            Choose the plan that fits your needs and get started instantly.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${
                plan.isPopular
                  ? "bg-primary text-white scale-[1.03] -translate-y-3"
                  : "bg-white"
              }`}
            >
              <div className="p-8">
                {/* Tag */}
                <div className="mb-4">
                  <span
                    className={`text-sm font-medium rounded-full px-3 py-1 ${
                      plan.isPopular
                        ? "bg-white/10 text-white"
                        : "bg-blue-100 text-primary"
                    }`}
                  >
                    {plan.target}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-base mb-6 ${
                    plan.isPopular ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-base"
                    >
                      <Check
                        className={`w-5 h-5 ${
                          plan.isPopular ? "text-white" : "text-primary"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className="w-full"
                  variant={plan.isPopular ? "secondary" : "primary"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
