import { useEffect, useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import logo from '../../assets/logo/logo.png';
import './header.scss';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

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

  useEffect(() => {
    function handleScroll() {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const display = visible ? 'visible' : 'hidden';

  return (
    <header className={display}>
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
              href='https://drive.google.com/file/d/1UXz5g2Qi29wfxDh-xEKYxvAjfAc_Hh1U/view?usp=sharing'
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
