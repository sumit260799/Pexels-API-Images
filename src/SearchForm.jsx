import React from "react";
import useGlobalContext from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section className="my-5">
      <form action="" onSubmit={handleSubmit}>
        <input
          className=" w-[210px] sm:w-[300px] tracking-[0.5rem]  border-1 text-[#05a081] shadow appearance-none border border-[#05a081] rounded-tl-md rounded-bl-md  py-[0.61rem] px-3  leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="search"
          placeholder="searh "
        />
        <button
          type="submit"
          className=" bg-transparent  hover:bg-[#05a081] text-[#05a081] font-semibold hover:text-white py-2 px-3 sm:px-4 border border-[#05a081] hover:border-transparent rounded-tr-md rounded-br-md "
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
