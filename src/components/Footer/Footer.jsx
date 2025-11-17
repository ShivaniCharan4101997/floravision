import styles from "./Footer.module.css";
import Logo from "../../ui/Logo.jsx";

const Footer = () => {
    return (
        <footer className={styles.footer}>
           <section className={styles.topSection}>
               <div className={styles.description}>
                    <Logo/>
                   <p className={styles.descriptionText}>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
               </div>
               <div className={styles.linkSection}>
                   <h3>Quick Link's</h3>
                   <ul>
                       <li>Home</li>
                       <li>Type's Of plant's</li>
                       <li>Contact</li>
                       <li>Privacy</li>
                   </ul>
               </div>
               <div className={styles.subscribeSection}>
                   <h3>For Every Update.</h3>
                   <div className={styles.inputGroup}>
                       <input type="email" placeholder="Enter Email" />
                       <button>SUBSCRIBE</button>
                   </div>
               </div>
           </section>
            <section className={styles.bottomSection}>
                <div className={styles.socialLinks}>
                    <span>FB</span>
                    <span>TW</span>
                    <span>LI</span>
                </div>
                <p>FloraVision © all right reserve</p>
            </section>
        </footer>
    );
};

export default Footer;
