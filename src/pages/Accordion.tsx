import AccordionItem from "../component/AccordionItem";
import { useState } from "react";
const data = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    desc: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    desc: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    desc: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    desc: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const HandleToggle = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-screen h-screen bg-[hsl(275_100%_97%)] font-[Work_sans]">
      <div className="relative w-full h-full flex flex-col justify-start items-center">
        {/* bg container */}
        <div className="h-[35%] bg-fuchsia-500 w-full">
          <img
            className="w-full h-full object-cover"
            src="/public/faq-accordion-kit/assets/images/background-pattern-desktop.svg"
            alt="faq-accordion-bg"
          />
        </div>

        {/* accordion container */}
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="max-w-2xl bg-white w-full flex flex-col p-10 rounded-2xl">
            {/* accordion top */}
            <div className="flex justify-start space-x-5">
              <div className="w-16 h-16 flex justify-center items-center">
                <img
                  src="/public/faq-accordion-kit/assets/images/icon-star.svg"
                  className="w-full h-full"
                />
              </div>
              <h1 className="text-6xl font-bold text-[hsl(292_42%_14%)]">
                FAQs
              </h1>
            </div>

            {/* accordion bottom */}
            <div className="mt-10 space-y-6">
              {data.map((data, i) => (
                <AccordionItem
                  key={i}
                  {...data}
                  isOpen={activeIndex === i}
                  onToggle={() => HandleToggle(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
