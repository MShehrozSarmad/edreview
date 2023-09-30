
import React from "react";

const SearchBarDropdown = ({ searchTerm, onSearchTermChange, onDropdownItemSelect }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="flex-grow border rounded-md"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button className="ml-4 rounded-md">Search</button>
      <ul className="ml-4 list-disc list-inside">
        <li
          onClick={() => onDropdownItemSelect("item1")}
          className="cursor-pointer"
        >
          Item 1
        </li>
        <li
          onClick={() => onDropdownItemSelect("item2")}
          className="cursor-pointer"
        >
          Item 2
        </li>
        <li
          onClick={() => onDropdownItemSelect("item3")}
          className="cursor-pointer"
        >
          Item 3
        </li>
      </ul>
    </div>
  );
};

export default SearchBarDropdown;
