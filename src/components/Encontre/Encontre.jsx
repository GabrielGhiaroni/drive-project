import React from 'react';
import styles from './Encontre.module.css'
import Card from '../Card/Card';

import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Encontre = () => {
  return (
    <section id="encontre" className={styles.encontre}>
        <div className={styles.heading}>
            <h1>Encontre o carro ideal para você</h1>
            <div className={styles.texto_bg}>
                <p>
                    <span>O maior site de carros compartilhados do mundo</span>
                </p>
            </div>
        </div>

        <div className={styles.slider_container}>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                pagination = {{clickable: true}}
                breakpoints={{
                    //when window width is >= 340px
                    340: {
                        width: 200,
                        slidesPerView: 1
                    },
                    //when windown width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 4
                    },
                    //when window width is >= 1040px
                    1040: {
                        width: 1040,
                        slidesPerView: 5
                    }
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide className={styles.swiper_card}>
                    <Card
                    imagem='https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    marca='Audi'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    marca='BMW'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    marca='Chevrolet'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    marca='Mercedes-Benz'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    marca='Nissan'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                    marca='Toyota'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                    marca='Jeep'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    marca='Ford'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    marca='Tesla'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                    imagem='https://images.unsplash.com/photo-1593353798398-6024b7444bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    marca='Porsche'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Encontre;