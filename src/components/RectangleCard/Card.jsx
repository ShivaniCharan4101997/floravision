import styles from "./Card.module.css";
import Button from "../../ui/Button.jsx";

export default function TrendyPlantCard({ title, desc, price, img, reverse }) {
    return (
        <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
            <TrendyPlantSvgBg />

            <div className={styles.grid}>
                <div className={styles.left}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <h4 className={styles.price}>Rs. {price}/-</h4>

                    <div className={styles.btns}>
                       <Button>Explore</Button>
                        <button className={styles.cart}>
                            <img src="/Bag.svg" alt="Add to cart" />
                        </button>
                    </div>
                </div>

                <img src={img} alt={title} className={styles.plant} />
            </div>
        </div>
    );

}


export function TrendyPlantSvgBg() {
    return (
        <svg
            viewBox="0 0 1619 526"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0)">
                <foreignObject x="-40" y="-40" width="1699" height="606">
                    <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            clipPath: "url(#bgblur)",
                            height: "100%",
                            width: "100%"
                        }}
                    />
                </foreignObject>

                <rect
                    x="1"
                    y="1"
                    width="1617"
                    height="524"
                    rx="150"
                    fill="white"
                    fillOpacity="0.05"
                    stroke="url(#paint0)"
                    strokeWidth="2"
                />
            </g>

            <defs>
                <clipPath id="bgblur">
                    <rect x="1" y="1" width="1617" height="524" rx="150" />
                </clipPath>

                <linearGradient
                    id="paint0"
                    x1="83.9"
                    y1="62.0"
                    x2="337.1"
                    y2="861.2"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.27" />
                    <stop offset="0.615" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.33" />
                </linearGradient>

                <clipPath id="clip0">
                    <rect width="1619" height="526" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
