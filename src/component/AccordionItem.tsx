import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
interface AccordionItemProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  desc: string;
}

const AccordionItem = ({
  title,
  desc,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Title of accordion item */}
      <div
        onClick={onToggle}
        className="flex justify-between items-center space-x-2"
      >
        <h1 className="text-lg font-semibold text-[hsl(292_42%_14%)]">
          {title}
        </h1>
        <motion.img
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
          src={`/public/faq-accordion-kit/assets/images/${
            isOpen ? "icon-minus.svg" : "icon-plus.svg"
          }`}
          alt=""
        />
      </div>
      {/* Accordion Content  */}

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, maxHeight: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        transition={{ duration: 0, ease: "easeInOut" }}
        className="mt-5 leading-relaxedtext-[hsl(292_16%_49%)] overflow-hidden transition-max-height duration-300 ease-in-out "
      >
        <p className="text-[hsl(292_16%_49%)]">{desc}</p>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
