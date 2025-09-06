import extensionListData from "@/data/browser-extension-data.json";
import { ExtensionItem } from "@/types/BrowserExtensionManager/browser-extension-data.types";
import ExtensionCard from "./ExtensionCard";

const ExtensionCardsContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-10">
      {extensionListData.map((extensionData: ExtensionItem) => (
        <ExtensionCard {...extensionData} />
      ))}
    </div>
  );
};

export default ExtensionCardsContainer;
