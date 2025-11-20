import styles from './Hero.module.css';
import Testimonial from "../../ui/Testimonial/Testimonial.jsx";
import Button from "../../ui/Button/Button.jsx";
import Slider from "../../ui/Slider.jsx";

const Hero = () => {
    return (
        <main className={styles.heroWrapper}>
           <section className={styles.heroContent}>
               <div className={styles.heroText}>
                   <h1>Earth’s Exhale</h1>
                   <p>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                   <div className={styles.demo}>
                       <Button>Buy Now</Button>
                       <div className={styles.ellipse}>
                           <img src="/PolygonFull.svg" alt="play button"/>
                       </div>
                       <p>Live Demo...</p>
                   </div>

               </div>
              {/*testimonial card*/}
              <Testimonial/>

           </section>
            <div className={styles.card}>
                <CurveCardSvg  />
                <img src={"/RoseGoldFeminineCalligraphyMonogramLogo.svg"} className={styles.plantImg} alt="Aglaonema  plant" />
                <div className={styles.inner}>
                    <h2>Indoor Plant</h2>
                    <div className={styles.parentDiv}>
                        <h2>Aglaonema plant</h2>
                        <img src="/right-arrow2.svg" alt=""/>
                    </div>
                    <Button>Buy Now</Button>
                    <Slider className={styles.ellipse}/>
                </div>
            </div>
        </main>
    );
};

export default Hero;


export function CurveCardSvg() {
    return (
        <svg className={styles.bg}  viewBox="0 0 512 631" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path
                d="M420.961 1.74976C467.994 -4.70936 511 31.3533 511 78.7761V553.47C511 595.444 476.974 629.47 435 629.47H77C35.0264 629.47 1 595.444 1 553.47V78.7761C1.00007 31.3533 44.0061 -4.70937 91.0391 1.74976C142.32 8.79256 205.927 15.8025 256 15.8025C306.073 15.8025 369.68 8.79256 420.961 1.74976Z"
                fill="white"
                fillOpacity="0.05"
                stroke="url(#paint0_linear_11_94)"
                strokeWidth="2"
            />

            <defs>
                <linearGradient
                    id="paint0_linear_11_94"
                    x1="12"
                    y1="46.9705"
                    x2="453"
                    y2="606.47"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.2" />
                    <stop offset="0.52" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.2" />
                </linearGradient>
            </defs>

        </svg>
    )
}
