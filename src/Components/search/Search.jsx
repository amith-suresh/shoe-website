import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');


  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
     onSearch(value);
  }
  return (
    <div className="pl-1">
      <input
        type="text"
        placeholder="Search"
        className="pl-16 border-2 border-black rounded-xl w-48 h-9"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
