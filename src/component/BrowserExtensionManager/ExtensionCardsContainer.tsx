import extensionListData from "@/data/browser-extension-data.json";
import { ExtensionItem } from "@/types/BrowserExtensionManager/browser-extension-data.types";
import ExtensionCard from "./ExtensionCard";
import { useState } from "react";

interface ExtensionCardsContainerProps {
  filterID: number;
}

const ExtensionCardsContainer = ({
  filterID,
}: ExtensionCardsContainerProps) => {
  const [data, setData] = useState<ExtensionItem[]>(extensionListData);

  const toggleExtension = (id: number) => {
    setData((prevData) =>
      prevData.map((item: ExtensionItem) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const removeExtension = (id: number) => {
    setData((prevData) =>
      prevData.filter((item: ExtensionItem) => item.id !== id)
    );
  };

  const filteredData = data.filter((item) => {
    if (filterID === 1) return item.isActive;
    if (filterID === 2) return !item.isActive;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      {filteredData.map((extensionData: ExtensionItem) => (
        <ExtensionCard
          key={extensionData.name}
          toggleExtension={toggleExtension}
          removeExtension={removeExtension}
          {...extensionData}
        />
      ))}
    </div>
  );
};

export default ExtensionCardsContainer;
