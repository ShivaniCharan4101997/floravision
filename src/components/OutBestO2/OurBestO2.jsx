import styles from './OurBestO2.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import Button from "../../ui/Button/Button.jsx";
import Slider from "../../ui/Slider.jsx";


export default function OurBestO2(){
    return (
        <section className={styles.wrapper}>
            <div className={styles.heading}>
                <img src="/outbesto2.svg" alt="our best o2 heading"/>
            </div>

            {/*card*/}
            <Swiper   modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      loop={false}
                      spaceBetween={50}>
                <SwiperSlide>
                    <div className={styles.card}>
                        <OurBestO2Svg  className={styles.cardBg} />
                        <div className={styles.content}>
                            <img src="/RoseGoldFeminineCalligraphyMonogramLogo.svg" alt="rose gold feminine calligraphy monogram plant" className={styles.plant}/>


                            <div className={styles.textBlock}>
                                <h3>We Have Small And Best O2 Plants Collection’s</h3>
                                <p>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                                <br/>
                                <p>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                                <div className={styles.bottomRow}>
                                  <Button>Explore</Button>

                                    <div className={styles.sliderNav}>
                                        <img src="/right-arrow3.svg" alt=""/>
                                        <p><span className={styles.bold}>01/</span>04</p>


                                        <img src="/right-arrow2.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        {/*    slider*/}
            <Slider/>

        </section>
    );
};




export function OurBestO2Svg(){
    return(
        <svg width="1600" height="755" viewBox="0 0 1600 755" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_13009_2)">
                <rect x="1.5" y="1.5" width="1597" height="752" rx="90.5" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_13009_2)" strokeWidth="3"/>
            </g>
            <defs>
                <linearGradient id="paint0_linear_13009_2" x1="29.5" y1="43" x2="1571" y2="726.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.44"/>
                    <stop offset="0.385" stopOpacity="0"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.33"/>
                </linearGradient>
                <clipPath id="clip0_13009_2">
                    <rect width="1600" height="755" fill="white"/>
                </clipPath>
            </defs>
        </svg>


    )
}