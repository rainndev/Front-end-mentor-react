import { useState } from "react";
import ExtensionCardsContainer from "../component/BrowserExtensionManager/ExtensionCardsContainer";
import FilterButtons from "../component/BrowserExtensionManager/FilterButtons";
import NavigationBar from "../component/BrowserExtensionManager/NavigationBar";

const BrowserExtensionMain = () => {
  const [filterID, setFilterID] = useState(0);

  return (
    <div className="min-h-screen w-full flex justify-center dark:[background-image:var(--color-BEM-dark-gradient)] [background-image:var(--color-BEM-light-gradient)] px-4 font-Noto-Sans">
      <div className="h-full flex max-w-7xl w-full flex-col my-10">
        <NavigationBar />
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-10">
          <h1 className="text-3xl font-bold dark:text-BEM-neutral-100 text-BEM-neutral-900 ">
            Extension List
          </h1>

          <FilterButtons filterID={filterID} setFilterID={setFilterID} />
        </div>
        <ExtensionCardsContainer filterID={filterID} />
      </div>
    </div>
  );
};

export default BrowserExtensionMain;
