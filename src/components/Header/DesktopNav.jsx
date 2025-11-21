import React from 'react';
import styles from "./Header.module.css";

const DesktopNav = () => {
    return (
        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
            <a href="#">Home</a>
            <a href="#">
                Plants type
                <img src="/Polygon_1.png" alt="polygon image" className={styles.polygonImg} />
            </a>
            <a href="#">More</a>
            <a href="#">Contact</a>
        </nav>
    );
};

export default DesktopNav;

