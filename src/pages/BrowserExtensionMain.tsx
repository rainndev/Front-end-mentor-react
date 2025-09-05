import FilterButtons from "../component/BrowserExtensionManager/FilterButtons";
import NavigationBar from "../component/BrowserExtensionManager/NavigationBar";

const BrowserExtensionMain = () => {
  return (
    <div className="h-dvh w-full flex justify-center [background-image:var(--color-BEM-dark-gradient)]">
      <div className="h-dvh flex max-w-7xl w-full  flex-col">
        <NavigationBar />
        <div className="flex justify-between mt-10">
          <h1 className="text-3xl font-medium text-BEM-neutral-100">
            Extension List
          </h1>

          <FilterButtons />
        </div>
      </div>
    </div>
  );
};

export default BrowserExtensionMain;
