import { Switch } from "@/components/ui/switch";
import { ExtensionItemProps } from "@/types/BrowserExtensionManager/browser-extension-data.types";

const ExtensionCard = (extensionData: ExtensionItemProps) => {
  return (
    <div className="flex flex-col dark:bg-BEM-neutral-800 p-4 border  bg-BEM-neutral-0 rounded-3xl justify-between shadow-sm">
      <div className="flex space-x-4">
        <img
          src={extensionData.logo}
          alt={extensionData.name + "name"}
          className="size-13 rounded-lg"
        />
        <div>
          <h1 className="dark:text-BEM-neutral-100 text-BEM-neutral-900 font-semibold text-lg ">
            {extensionData.name}
          </h1>
          <p className="dark:text-BEM-neutral-300 text-BEM-neutral-600 text-sm md:text-base  font-normal mt-1">
            {extensionData.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-10 items-center">
        <button
          onClick={() => extensionData.removeExtension(extensionData.id)}
          className="px-4 py-1.5 text-sm 
           dark:text-BEM-neutral-0
          hover:text-BEM-neutral-0
          
          hover:bg-BEM-red-700 text-BEM-neutral-900  border-1 rounded-full
          border-BEM-neutral-300
          dark:border-BEM-neutral-600 dark:hover:bg-BEM-red-400 cursor-pointer dark:hover:text-BEM-neutral-900 dark:hover:border-BEM-neutral-900 transition-colors ease-in-out duration-200 browser-extension-focus-state"
        >
          Remove
        </button>

        <Switch
          className="cursor-pointer "
          checked={extensionData.isActive}
          onCheckedChange={() =>
            extensionData.toggleExtension(extensionData.id)
          }
          id={extensionData.name}
        />
      </div>
    </div>
  );
};

export default ExtensionCard;
