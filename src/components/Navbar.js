import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './global.css';

function Navbar() {
  const { text, setText, onSearch, goDefault } = useContext(AppContext);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="navbar d-flex p-1 fixed-top bg-light">
      <div onClick={goDefault} className="image">Home</div>
      <div className="d-flex" role="search">
        <input
          className="form-control me-2"
          placeholder="Search"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-outline-success" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar;
