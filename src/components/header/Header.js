import { useEffect } from 'react';
import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import logo from '../../assets/logo/logo.png';
import './header.scss';

function Header() {
  const [isOpen, setOpen] = useState(false);

  function setButtonHandler() {
    setOpen(!isOpen);
    document.querySelector('.icon').classList.toggle('closed');
  }

  const anchors = document.querySelectorAll('.anchor');

  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function (e) {
      setOpen(false);
    });
  }

  return (
    <header>
      <div className='header-logo'>
        <a href='#' className='header-logo-anchor'>
          <img src={logo} alt='logo website' className='logo' />
        </a>
      </div>
      <div
        id='nav-header'
        className={`navigation-header ${isOpen ? 'active' : ''}`}
      >
        <ul>
          <li>
            <a className='anchor' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='anchor' href='#works'>
              Work
            </a>
          </li>
          <li>
            <a className='anchor' href='#experience'>
              Experience
            </a>
          </li>
          <li>
            <a className='anchor' href='#contact'>
              Contact
            </a>
          </li>
          <li className='resume'>
            <a
              className='anchor'
              href='https://drive.google.com/file/d/1bzdYkIeWs8VFoiKuCfI94abLrh71gHnV/view'
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className='menu-icon'>
        <button onClick={setButtonHandler}>
          {!isOpen ? (
            <IoMenuOutline className='icon' name='menu' />
          ) : (
            <IoCloseOutline className='icon' name='close' />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
