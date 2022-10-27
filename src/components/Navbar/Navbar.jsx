import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import Logo from '../../images/logo.png';

const Navbar = () => {

    const [nav, setNav] = useState(false);

  return (
    <header  id="header" className={styles.navbar}>
        <img src={Logo} alt="logo" />
        <nav>
            <ul className={ nav ? [styles.menu, styles.ativo].join(' ') : styles.menu}>
                <li>
                    <a href="#encontre" onClick={() => setNav(false)}>Saiba mais</a>
                </li>
                <li>
                    <a href="#encontre" onClick={() => setNav(false)}>Log in</a>
                </li>
                <li>
                    <a href="#encontre" onClick={() => setNav(false)}>Cadastre-se</a>
                </li>
                <li>
                    <AiOutlineSearch size={25} style={{marginTop: '6px'}}/>
                </li>
                <li>
                    <AiOutlineUser size={25} style={{marginTop: '6px'}}/>
                </li>
            </ul>
        </nav>

        <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            { nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>
    </header>
  )
}

export default Navbar;