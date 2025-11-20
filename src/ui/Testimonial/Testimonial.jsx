import Stars from "../stars/Stars.jsx";

import styles from "./Testimonial.module.css";


const Testimonial = () => {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.userRating}>
                <div className={styles.userImage}>
                    <img src="/UserImage.png" alt="image of user testimonials" />
                </div>

                <div className={styles.userName}>
                    <h2>Ronnie Hamill</h2>

                  <Stars/>
                </div>
            </div>

            <div className={styles.userFeedback}>
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
            </div>
        </div>
    );
};

export default Testimonial;