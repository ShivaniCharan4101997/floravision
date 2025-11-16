import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            {/* logo */}
            <div className={styles.left}>
                <div className={styles.logo}>
                <img src="/plant_1.png" alt="logo"/>

                </div>
                <span className={styles.brandName}>FloraVision.</span>

            </div>

            {/* navbar */}
            <nav className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">
                    Plants type
                    <img src="/Polygon_1.png" alt="dropdown" className={styles.polygonImg}/>
                </a>
                <a href="#">More</a>
                <a href="#">Contact</a>
            </nav>

            {/* search + bag + hamburger */}
            <div className={styles.right}>
                <img src="/searchBar.png" alt="search" className={styles.icon}/>
                <img src="/bag_1.png" alt="cart" className={styles.icon}/>

                <div className={styles.hamburger}>
                    <span></span>
                    <span className={styles.short}></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
