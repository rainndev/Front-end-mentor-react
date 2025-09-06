import ExtensionCardsContainer from "../component/BrowserExtensionManager/ExtensionCardsContainer";
import FilterButtons from "../component/BrowserExtensionManager/FilterButtons";
import NavigationBar from "../component/BrowserExtensionManager/NavigationBar";

const BrowserExtensionMain = () => {
  return (
    <div className="h-full w-full flex justify-center [background-image:var(--color-BEM-dark-gradient)]">
      <div className="h-full flex max-w-7xl w-full flex-col my-10">
        <NavigationBar />
        <div className="flex justify-between mt-10">
          <h1 className="text-3xl font-medium text-BEM-neutral-100">
            Extension List
          </h1>

          <FilterButtons />
        </div>
        <ExtensionCardsContainer />
      </div>
    </div>
  );
};

export default BrowserExtensionMain;
