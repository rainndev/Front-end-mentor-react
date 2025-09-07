interface FilterButtonsProps {
  filterID: number;
  setFilterID: (id: number) => void;
}

const filterOptions = ["All", "Active", "Inactive"];

const FilterButtons = ({ filterID, setFilterID }: FilterButtonsProps) => {
  return (
    <div className="space-x-2 flex text-BEM-neutral-900">
      {filterOptions.map((data, i) => (
        <button
          key={i}
          onClick={() => setFilterID(i)}
          className={`p-1 px-4 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-2   ${
            filterID === i
              ? "dark:bg-BEM-red-400 bg-BEM-red-700  dark:text-BEM-neutral-900 text-BEM-neutral-0 focus:outline-1 focus:ring-2 focus:ring-BEM-red-400 dark:focus:border-BEM-neutral-900 focus:border-BEM-neutral-0"
              : "dark:bg-BEM-neutral-700 bg-BEM-neutral-0 dark:hover:bg-BEM-neutral-600 dark:text-BEM-neutral-0 hover:bg-BEM-neutral-100/50 hover:text-BEM-neutral-600 text-BEM-neutral-900 browser-extension-focus-state "
          }`}
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
