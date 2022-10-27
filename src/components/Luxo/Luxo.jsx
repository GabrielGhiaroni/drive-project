import React from 'react';
import styles from './Luxo.module.css';

const Luxo = () => {
  return (
    <section className={styles.luxo}>
        <div className={styles.heading}>
            <h2>Carros de Luxo</h2>
            <div className={styles.texto_bg}>
                <p>
                    <span>Veículos de luxo disponíveis para pronta entrega</span>
                </p>
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.card}>
                <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="foto Rolls Royce" />
                <div className={styles.content}>
                    <h3>Rolls Royce</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="foto Maserati" />
                <div className={styles.content}>
                    <h3>Maserati</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmdlJTIwcm92ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="foto Range Rover" />
                <div className={styles.content}>
                    <h3>Range Rover</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="foto Porsche" />
                <div className={styles.content}>
                    <h3>Porsche</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Luxo;