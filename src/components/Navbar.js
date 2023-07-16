import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './global.css';
import logo from '../logo.png';
import logoDark from '../logoDark.png';
import { BsMoonStarsFill, BsSunFill} from "react-icons/bs";

function Navbar() {
  const { text, setText, onSearch, goDefault,clickdark,dark} = useContext(AppContext);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };
  return (
  <div className={`${ (!dark)?'darkcustomNavbar':'customNavbar'} navbar cusNavbar navbar-expand-lg `}>
  <div className="container-fluid d-flex justify-content-between">
      <div onClick={goDefault}  className='d-flex pointer'>
          <img className="logo" src={(dark)?logo:logoDark} />
          <div  className={`${(dark)?'image':'dimage'}`}>Home</div>
          </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <div className="d-flex" role="search">
            <input
              className="form-control me-2"
              placeholder="Search"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
                console.log(dark)
              }}
              onKeyDown={handleKeyDown}
            />
            <button className="btn custom-btn" onClick={onSearch}>
              Search
            </button>
            <div className={`pointer ${(dark)?'iconstyle':'diconstyle'}`} onClick={clickdark}>
            {(dark)?<BsMoonStarsFill />:<BsSunFill/>}
            </div>
          </div>
        </div>
</div>
</div>
  );
}

export default Navbar;
