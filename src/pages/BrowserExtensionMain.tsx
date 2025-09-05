import NavigationBar from "../component/BrowserExtensionManager/NavigationBar";

const BrowserExtensionMain = () => {
  return (
    <div className="h-dvh w-full flex justify-center [background-image:var(--color-BEM-dark-gradient)]">
      <div className="h-dvh flex max-w-7xl w-full">
        <NavigationBar />
      </div>
    </div>
  );
};

export default BrowserExtensionMain;
