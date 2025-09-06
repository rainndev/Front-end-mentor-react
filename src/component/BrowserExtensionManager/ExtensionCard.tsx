import { ExtensionItem } from "@/types/BrowserExtensionManager/browser-extension-data.types";

const ExtensionCard = (extensionData: ExtensionItem) => {
  return (
    <div className="flex flex-col bg-BEM-neutral-800 p-4 border border-BEM-neutral-600 rounded-3xl justify-between">
      <div className="flex space-x-5">
        <img
          src={extensionData.logo}
          alt={extensionData.name + "name"}
          className="size-13"
        />
        <div>
          <h1 className="text-BEM-neutral-100 font-medium text-lg">
            {extensionData.name}
          </h1>
          <p className="text-BEM-neutral-300">{extensionData.description}</p>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <button className="px-4 py-1.5 text-sm text-BEM-neutral-0 border rounded-full border-BEM-neutral-600">
          Remove
        </button>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default ExtensionCard;
