import styles from './Hero.module.css';
import Card from "../Card/Card.jsx";
import Testimonial from "../../ui/Testimonial.jsx";

const Hero = () => {
    return (
        <main className={styles.heroWrapper}>
           <section className={styles.heroContent}>
               <div className="heroText"></div>
              {/*testimonial card*/}
              <Testimonial/>

           </section>
            <section className={styles.heroImage}>
                <Card/>
            </section>
        </main>
    );
};

export default Hero;

