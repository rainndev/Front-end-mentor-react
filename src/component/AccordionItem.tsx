interface AccordionItemProps {
  title: string;
  desc: string;
}

const AccordionItem = ({ title, desc }: AccordionItemProps) => {
  return (
    <div>
      {/* Title of accordion item */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-[hsl(292_42%_14%)]">
          {title}
        </h1>
        <img
          src="/public/faq-accordion-kit/assets/images/icon-plus.svg"
          alt=""
        />
      </div>
      {/* Accordion Content  */}
      <div className="mt-2 leading-relaxed  text-[hsl(292_16%_49%)] ">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
