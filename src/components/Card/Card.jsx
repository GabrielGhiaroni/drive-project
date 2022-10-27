import React from 'react';
import styles from '../Encontre/Encontre.module.css';

const Card = ({imagem, marca}) => {
  return (
    <div>
        <div className={styles.card}>
            <img src={imagem} alt="imagem carro" />
            <p style={{textAlign: 'center'}}>{marca}</p>
        </div>
    </div>
  )
}

export default Card;