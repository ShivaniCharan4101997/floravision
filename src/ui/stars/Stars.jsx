import  styles from "./Stars.module.css"


const Stars = () => {
    return (
        <div className={styles.starRating}>
            <img src="/FullStar.svg" alt="full star" />
            <img src="/FullStar.svg" alt="full star" />
            <img src="/FullStar.svg" alt="full star" />
            <img src="/FullStar.svg" alt="full star" />
            <img src="/HalfStar.svg" alt="half star image" />
        </div>
    );
};

export default Stars;