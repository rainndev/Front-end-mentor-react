import AccordionItem from "../component/AccordionItem";

const data = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    desc: `Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.`,
  },
  {
    title: "How do I get help with a challenge?",
    desc: `Challenges have a dedicated chat in the Frontend Mentor community. There
          you can ask questions and get help from other developers.`,
  },
  {
    title: "How do I get help with a challenge?",
    desc: `Challenges have a dedicated chat in the Frontend Mentor community. There
          you can ask questions and get help from other developers.`,
  },
  {
    title: "How do I get help with a challenge?",
    desc: `Challenges have a dedicated chat in the Frontend Mentor community. There
          you can ask questions and get help from other developers.`,
  },
];

const Accordion = () => {
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
        <div className="absolute max-w-4xl bg-white w-full top-1/2 flex flex-col p-10 rounded-2xl">
          {/* accordion top */}
          <div className="flex justify-start space-x-5">
            <div className="w-16 h-16 flex justify-center items-center">
              <img
                src="/public/faq-accordion-kit/assets/images/icon-star.svg"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-6xl font-bold text-[hsl(292_42%_14%)]">FAQs</h1>
          </div>

          {/* accordion bottom */}
          <div className="mt-10 space-y-5">
            {data.map((data) => (
              <AccordionItem {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
