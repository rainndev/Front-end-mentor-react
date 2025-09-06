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
          className={`p-1 px-4 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border ${
            filterID === i
              ? "bg-BEM-red-400  dark:text-BEM-neutral-900 text-BEM-neutral-0"
              : "dark:bg-BEM-neutral-700 bg-BEM-neutral-0 dark:hover:bg-BEM-neutral-600 dark:text-BEM-neutral-0 hover:bg-BEM-neutral-100/50 hover:text-BEM-neutral-600 text-BEM-neutral-900"
          }`}
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
