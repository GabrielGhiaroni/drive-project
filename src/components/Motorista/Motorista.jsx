import React from 'react';
import styles from './Motorista.module.css';
import Foto from '../../images/drive.png';

const Motorista = () => {
  return (
    <section className={styles.motorista}>
        <div className={styles.esquerda}>
            <img src={Foto} alt="foto motorista" />
        </div>

        <div className={styles.direita}>
            <h2>Diversos modelos e marcas <span>para você experimentar</span></h2>
            <p>Encontre que mais combina com você!</p>
            <button className={styles.motorista_btn}>Procurar carros</button>
        </div>
    </section>
  )
}

export default Motorista;