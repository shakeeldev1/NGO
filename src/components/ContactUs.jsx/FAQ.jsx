import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "How can I get involved with USWA?",
    answer:
      "You can volunteer, participate in our community programs, support awareness campaigns, or collaborate with us on social initiatives.",
  },
  {
    question: "Can I make a donation online?",
    answer:
      "Yes. You can donate through our official website or contact our team for bank transfer and other donation options.",
  },
  {
    question: "Do you offer volunteer opportunities?",
    answer:
      "Yes. We regularly welcome volunteers for health camps, education initiatives, environmental activities, and awareness programs.",
  },
  {
    question: "How can I partner with USWA for a project?",
    answer:
      "Please contact us using the contact form or email us with your project proposal. Our team will get back to you shortly.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   
    <section className="bg-[#f8faf8] pt-15  pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-md">
         
          <h2 className="text-2xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="mt-2 mb-8 h-1 w-12 rounded-full bg-green-600"></div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between bg-white px-5 py-4 text-left font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  <span>{faq.question}</span>

                  {activeIndex === index ? (
                    <FiChevronUp className="text-gray-500" />
                  ) : (
                    <FiChevronDown className="text-gray-500" />
                  )}
                </button>

                {activeIndex === index && (
                  <div className="border-t border-gray-200 bg-gray-50 px-5 py-4 text-gray-600 leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;