import React from 'react';
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className={styles.hero}>
        <form>
            <div className={styles.texto}>
                <label>Onde</label>
                <input className={styles.texto_input} type="text" placeholder='Buscar destinos' />
            </div>
            <div className={styles.checkin}>
                <span className={styles.border}></span>
                <label>Check-in</label>
                <input type="date" />
            </div>
            <div className={styles.checkout}>
                <span className={styles.border}></span>
                    <label>Checkout</label>
                    <input type="date"/>
            </div>
            <div className={styles.lupa_btn}>
                <AiOutlineSearch className={styles.icon}/>
                <button className={styles.btn}>Procurar carros</button>
            </div>
        </form>
    </section>
  )
}

export default Hero;