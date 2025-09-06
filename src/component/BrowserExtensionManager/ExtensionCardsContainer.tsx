import extensionListData from "@/data/browser-extension-data.json";
import { ExtensionItem } from "@/types/BrowserExtensionManager/browser-extension-data.types";
import ExtensionCard from "./ExtensionCard";
import { useState } from "react";

const ExtensionCardsContainer = () => {
  const [data, setData] =
    useState<Omit<ExtensionItem, "toggleExtension">[]>(extensionListData);

  const toggleExtension = (id: number) => {
    setData((prevData) =>
      prevData.map((item: ExtensionItem) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <div className="grid grid-cols-3 gap-3 mt-10">
      {data.map((extensionData: ExtensionItem) => (
        <ExtensionCard
          key={extensionData.name}
          toggleExtension={toggleExtension}
          {...extensionData}
        />
      ))}
    </div>
  );
};

export default ExtensionCardsContainer;
