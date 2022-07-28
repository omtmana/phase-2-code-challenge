import React from "react";

function SearchBar({search , setSearch}) {
  // const onSearchChange = ((e) => {
  //   e.preventDefault()
  // })

  const handleSubmit = ((e) => {
    e.preventDefault()
  })

  return (
    <div className="search">
      <input onSubmit={handleSubmit}
      type="text" 
      className="searchTerm" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
