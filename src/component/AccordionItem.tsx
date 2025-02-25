import { useRef } from "react";
import { motion } from "framer-motion";
interface AccordionItemProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  desc: string;
  isLast: boolean;
}

const AccordionItem = ({
  title,
  desc,
  isOpen,
  onToggle,
  isLast,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const accordionVariants = {
    initial: {
      opacity: 0,
      maxHeight: 0,
    },
    open: {
      opacity: 1,
      maxHeight: contentRef.current?.scrollHeight,
    },
    notOpen: {
      opacity: 0,
      maxHeight: 0,
    },
  };

  console.log(isOpen, contentRef.current?.scrollHeight);
  return (
    <div>
      {/* Title of accordion item */}
      <div
        onClick={onToggle}
        className="flex justify-between items-center space-x-2"
      >
        <h1 className="text-[clamp(1rem,2vw,1.2rem)] font-semibold text-[hsl(292_42%_14%)] hover:text-[#af60b9] w-[90%]">
          {title}
        </h1>
        <motion.img
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.05 : 1 }}
          src={`/Front-end-mentor-react/faq-accordion-kit/assets/images/${
            isOpen ? "icon-minus.svg" : "icon-plus.svg"
          }`}
          alt=""
        />
      </div>
      {/* Accordion Content  */}

      <motion.div
        ref={contentRef}
        variants={accordionVariants}
        initial="initial"
        animate={isOpen ? "open" : "notOpen"}
        transition={{ duration: 0, ease: "easeInOut" }}
        className="mt-5 leading-relaxed text-[hsl(292_16%_49%)] overflow-hidden transition-max-height duration-300 ease-in-out "
      >
        <p className="text-[hsl(292_16%_49%)] text-[clamp(.9rem,2vw,1rem)]">
          {desc}
        </p>
      </motion.div>
      {!isLast && (
        <div className="mt-2 w-full h-[2px] bg-[hsl(275_100%_97%)]" />
      )}
    </div>
  );
};

export default AccordionItem;
