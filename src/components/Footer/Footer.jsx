import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../images/logo_dark.png';
import {SlSocialLinkedin} from 'react-icons/sl';
import {FiGithub} from 'react-icons/fi';

const Footer = () => {
  return (
    <section>
        <div className={styles.footer}>
            <div className={styles.container}>
                <a href="#header"><img src={Logo} alt="logo" /></a>
                <div className={styles.socials}>
                    <a href="https://www.linkedin.com/in/gabrielghiaroni/">
                        <SlSocialLinkedin style={{color: '#fff', width: '2rem', height: '1.5rem'}}/>
                    </a>
                    <a href="https://github.com/GabrielGhiaroni">
                        <FiGithub style={{color: '#fff', width: '2rem', height: '1.5rem'}}/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;