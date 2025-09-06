import { Switch } from "@/components/ui/switch";
import { ExtensionItemProps } from "@/types/BrowserExtensionManager/browser-extension-data.types";

const ExtensionCard = (extensionData: ExtensionItemProps) => {
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

      <div className="flex justify-between mt-10 items-center">
        <button className="px-4 py-1.5 text-sm text-BEM-neutral-0   border rounded-full border-BEM-neutral-600 hover:bg-BEM-red-400 cursor-pointer hover:text-BEM-neutral-900 hover:border-BEM-neutral-900 transition-colors ease-in-out duration-200">
          Remove
        </button>

        <Switch
          className="cursor-pointer"
          checked={extensionData.isActive}
          onCheckedChange={(check) => {
            extensionData.toggleExtension(extensionData.id);
            console.log(
              `extension: ${extensionData.name}: toggled to : ${check}`
            );
          }}
          id={extensionData.name}
        />
      </div>
    </div>
  );
};

export default ExtensionCard;
