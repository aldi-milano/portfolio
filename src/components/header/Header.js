import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import logo from '../../assets/logo/logo.png';
import './header.scss';

function Header() {
  const [isOpen, setOpen] = useState(false);
  function setButtonHandler() {
    setOpen(!isOpen);
    document.querySelector('.navigation-header').classList.toggle('active');
    document.querySelector('.icon').classList.toggle('closed');
  }

  return (
    <header>
      <div className='header-logo'>
        <a href='#' className='header-logo-anchor'>
          <img src={logo} alt='logo website' className='logo' />
        </a>
      </div>
      <div className='navigation-header'>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#works'>Work</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li className='resume'>
            <a
              href='https://drive.google.com/file/d/1bzdYkIeWs8VFoiKuCfI94abLrh71gHnV/view'
              className='resume-anchor'
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className='menu-icon'>
        <button onClick={setButtonHandler}>
          {!isOpen ? (
            <IoMenuOutline className='icon' />
          ) : (
            <IoCloseOutline className='icon' />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
