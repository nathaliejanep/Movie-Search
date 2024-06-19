import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input
        className='search'
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder='Type to search..'
      />
    </div>
  );
};

export default Search;
