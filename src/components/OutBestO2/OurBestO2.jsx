import styles from './OurBestO2.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Button from "../../ui/Button/Button.jsx";
import Slider from "../../ui/Slider.jsx";

export default function OurBestO2() {
    return (
        <section className={styles.wrapper}>

            {/* heading */}
            <div className={styles.heading}>
                <img src="/outbesto2.svg" alt="our best o2 heading"/>
            </div>

            {/* slider */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={false}
                spaceBetween={50}
            >
                <SwiperSlide>
                    <div className={styles.o2card}>
                        {/* background */}
                        <div className={styles.bg}></div>

                        <div className={styles.content}>
                            <img
                                src="/RoseGoldFeminineCalligraphyMonogramLogo.svg"
                                alt="o2 plant"
                                className={styles.plant}
                            />

                            <div className={styles.textBlock}>
                                <h3>We Have Small And Best O2 Plants Collection’s</h3>

                                <p>
                                    Oxygen-producing plants, often referred to as "O2 plants,"
                                    release oxygen into the atmosphere through photosynthesis.
                                </p>

                                <p>
                                    Many plants help filter pollutants and toxins from the air,
                                    such as formaldehyde, benzene, and trichloroethylene—making
                                    your environment cleaner and healthier.
                                </p>

                                <div className={styles.bottomRow}>
                                    <Button>Explore</Button>

                                    <div className={styles.sliderNav}>
                                        <img src="/right-arrow3.svg" alt=""/>
                                        <p>
                                            <span className={styles.bold}>01/</span>04
                                        </p>
                                        <img src="/right-arrow2.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Slider />
        </section>
    );
}
