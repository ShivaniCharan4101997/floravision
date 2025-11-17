import styles from "./Review.module.css"
import Stars from "../../ui/stars/Stars.jsx";

const reviews =[
    {
        image:'/sally.svg',
        name:"Shelly Russel",
        review:"Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
    },
    {
        image:'/lula.svg',
        name:"Lula Rolfson",
        review:"Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
    },
    {
        image:'/carol.svg',
        name:"Carol Huels",
        review:"It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"

    }
]



const Review = () => {
    return (
        <section className={styles.wrapper}>
<div className={styles.heading}>
    <img src="/CustomerReview.svg" alt="CustomerReview" />
</div>
            <div className={styles.reviewWrapper}>
                {reviews.map((item, index) => (
                    <div key={index} className={styles.reviewCard}>
                        <img src="/ReviewBg.svg" alt="review bg" className={styles.reviewBg}/>
                        <div className={styles.cardDetails}>
                            <div className={styles.user}>
                                <img src={item.image} alt={item.name}/>
                                <div>
                                    <h2>{item.name}</h2>
                                    <Stars/>
                                </div>
                            </div>
                            <p className={styles.reviewPara}>{item.review}</p>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Review;