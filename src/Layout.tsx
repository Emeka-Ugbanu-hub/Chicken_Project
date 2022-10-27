import React,{useState} from 'react';
import { Link } from 'react-scroll';

import './asset/styles/layout.scss';

import Logo from './asset/image/hd-logo.png';
import Twitter from './asset/image/hd-twitter.png';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const [open,setOpen] = useState(false)
  
  return (
    <>
      <header>
        <div className="header">
          <menu className= {open ?'show':'none'}>
            <ul className="menu">
              <li>
                <Link
                  activeClass="active"
                  to="introduction"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  style={{ cursor: 'pointer' }}
                >
                  Introduce
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="roadmap"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  style={{ cursor: 'pointer' }}
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contract"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ cursor: 'pointer' }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  style={{ cursor: 'pointer', zIndex: 99 }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="logo">
              <a href={'/'}>
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href={'/'}>
                <img src={Logo} alt="Logo" />
              </a>
            </div>
          </menu>
          <div className='hamburger_box'>
            <input type="checkbox" id="openable" />
          <label className="hamburger" onClick={()=>setOpen(!open)} htmlFor="openable">
            <span></span>
          </label>
            </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
};

export default Layout;
