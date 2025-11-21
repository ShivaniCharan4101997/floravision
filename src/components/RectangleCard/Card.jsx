import styles from "./Card.module.css";

export default function TrendyPlantCard({ title, desc, price, img, reverse }) {
    return (
        <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
            <div className={styles.imageBox}>
                <img src={img} alt={title} />
            </div>

            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{desc}</p>

                <div className={styles.price}>Rs. {price}/-</div>

                <div className={styles.buttons}>
                    <button className={styles.explore}>Explore</button>
                    <button className={styles.cart}>
                        <img src="/bag_1.png" alt="cart" />
                    </button>
                </div>
            </div>
        </div>
    );
}
