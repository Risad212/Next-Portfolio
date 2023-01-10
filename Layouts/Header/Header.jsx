import React, { useEffect, useState } from 'react';
import header from './Header.module.css';
import { Container } from '@material-ui/core';
const Header = () => {
    const [navStyle, setNavStyle] = useState()
    const [toggle, setToggle] = useState(true)

    useEffect(() =>{
      if(toggle){
        setNavStyle({})
      }else{
        setNavStyle({
            height: '205px',
            visibility: 'visible',
        })
      }
    },[toggle])

     const buttonClick = (e) =>{
        setToggle(!toggle)
        const getValue = e.target;
        getValue.classList.toggle('active')
     }

    return (
        <div className={header.header}>
            <Container>
            <nav className={header.navbar}>
                    <div class={header.logo}>
                        <a href="#">Risad Dev Zone</a>
                    </div>
                    {/*-- mobile bar --*/}
                    <div className={header.togglebar} onClick={(e) => buttonClick(e)}>
                        <span className={toggle? '':header.active}></span>
                    </div>
                    <div className={`${header.menuWrapper}`} style={navStyle}>
                        <ul className="navbar-nav ms-auto">
                            <li className={header.navItem}>
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className={header.navItem}>
                                <a className="nav-link" href="/about">About Me</a>
                            </li>
                            <li className={header.navItem}>
                                <a className="nav-link" href="/service">Services</a>
                            </li>
                            <li className={header.navItem}>
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className={`${header.navItem} ${header.navButton}`}>
                                <a className="nav-link" href="/contactPage">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </Container>
        </div>
    );
};

export default Header;