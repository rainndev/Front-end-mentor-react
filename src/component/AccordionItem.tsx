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
          src={`/faq-accordion-kit/assets/images/${
            isOpen ? "icon-minus.svg" : "icon-plus.svg"
          }`}
          alt=""
        />
      </div>
      {/* Accordion Content  */}

      <motion.div
        ref={contentRef}
        animate={{
          opacity: isOpen ? 1 : 0,
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
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
