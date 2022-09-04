import React, { useState } from 'react';

import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi'

import './Navbar.scss';

const Navbar = () => {
  //VARIABLE DECLARATION
  const [toggle, setToggle] = useState(false)
  const [items, setItems] = useState(['home', 'about', 'work', 'skills', 'contact']);
  //VARIABLE DECLARATION

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.templecoder_logo} />
      </div>
      <ul className='app__navbar-links'>
        {items.map((item, index) => {
          return (
            <li className='app__flex p-text' key={index}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        })}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle ?
          <div
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {items.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                )
              })}
            </ul>
          </div> :
          null
        }
      </div>
    </nav>
  )
}

export default Navbar;
