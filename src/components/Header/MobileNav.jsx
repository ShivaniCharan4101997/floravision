import styles from "./Header.module.css";

export default function MobileNav({open,setOpen}) {
    return (
        <nav className={`${styles.mobileNav} ${open ? styles.open : ""}`}>

            <div className={styles.closeIcon} onClick={()=>setOpen(!open)}>X</div>
            <div className={styles.navlinks}>
                <a href="#">Home</a>
                <a  href="#">Plants</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

        </nav>
    );
}
