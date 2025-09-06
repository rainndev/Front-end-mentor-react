import { useState } from "react";

const filterOptions = ["All", "Active", "Inactive"];

const FilterButtons = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div className="space-x-2 flex text-BEM-neutral-900">
      {filterOptions.map((data, i) => (
        <button
          key={i}
          onClick={() => setSelectedFilter(i)}
          className={`p-1 px-4 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ${
            selectedFilter === i
              ? "bg-BEM-red-400 text-BEM-neutral-900"
              : "bg-BEM-neutral-700 hover:bg-BEM-neutral-600 text-BEM-neutral-0"
          }`}
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
