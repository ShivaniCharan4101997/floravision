
import styles from "../components/OutBestO2/OurBestO2.module.css";


const Slider = () => {
    return (
        <div className={styles.slidePoint}>
            <span className={styles.rectangle}></span>
            <span className={styles.ellipse}></span>
            <span className={styles.ellipse}></span>
        </div>
    );
};

export default Slider;