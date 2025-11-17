import styles from "../components/Header/Header.module.css";

const Logo = () => {
    return (
        <div className={styles.left}>
            <div className={styles.logo}>
                <img src="/Logo.png" alt="logo"/>
            </div>
            <span className={styles.brandName}>FloraVision.</span>
        </div>
    );
};

export default Logo;