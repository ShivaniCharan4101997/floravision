import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../ui/Logo.jsx";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <Logo />

            {/* navbar */}
            <div className={styles.desktopNav}>
                <DesktopNav />
            </div>

            {/* right icons + hamburger */}
            <div className={styles.right}>
                <img src="/searchBar.png" alt="search" className={styles.icon}/>
                <img src="/bag_1.png" alt="cart" className={styles.icon}/>

                <div
                    className={styles.hamburger}
                    onClick={() => setOpen(!open)}
                >
                    {!open && <><span></span>
                        <span className={styles.short}></span></>
                }

                </div>
                {open && <MobileNav open={open} setOpen={setOpen} />}
            </div>
        </header>
    );
};

export default Header;
