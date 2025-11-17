import styles from './OurBestO2.module.css';

const OurBestO2 = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.heading}>
                <img src="/outbesto2.svg" alt="our best o2 heading"/>
            </div>

            {/*card*/}
            <div className={styles.card}>
                <img src="/Rectangle9.png" alt="background" className={styles.cardBg} />
                
                <div className={styles.content}>
                    <img src="/RoseGoldFeminineCalligraphyMonogramLogo.svg" alt="rose gold feminine calligraphy monogram plant" className={styles.plant}/>


                    <div className={styles.textBlock}>
                        <h3>We Have Small And Best O2 Plants Collection’s</h3>
                        <p>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                        <br/>
                        <p>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                        <div className={styles.bottomRow}>
                            <button className={styles.exploreBtn}>Explore</button>
                            
                            <div className={styles.sliderNav}>
                                <img src="/right-arrow3.svg" alt=""/>
                                <p><span className={styles.bold}>01/</span>04</p>


                                <img src="/right-arrow2.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBestO2;


