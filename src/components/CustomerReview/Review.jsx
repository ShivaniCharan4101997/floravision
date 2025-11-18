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



export default function Review() {
    return (
        <section >
<div className={styles.heading}>
    <img src="/CustomerReview.svg" alt="CustomerReview" />
</div>
            <div className={styles.reviewWrapper}>
                {reviews.map((item, index) => (
                    <div key={index} className={styles.reviewCard}>

                        <ReviewBgSvg className={styles.reviewBg} />

                        <div className={styles.cardDetails}>
                            <div className={styles.user}>

                                <img src={item.image} alt={item.name} className={styles.image}/>
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




export  function ReviewBgSvg() {
    return (
        <svg
            viewBox="0 0 512 480"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <g clipPath="url(#clip0_11003_5)">
                <foreignObject x="-25" y="-15.1548" width="562" height="522.555">
                    <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                            backdropFilter: "blur(12.5px)",
                            WebkitBackdropFilter: "blur(12.5px)",
                            clipPath: "url(#bgblur_1_11003_5_clip_path)",
                            height: "100%",
                            width: "100%"
                        }}
                    />
                </foreignObject>

                <g filter="url(#filter0_d_11003_5)" data-figma-bg-blur-radius="25">
                    <path
                        d="M0 88.1697C0 41.5238 41.1363 5.47099 87.5342 10.2752C139.414 15.6471 204.808 21.1168 256 21.1168C307.192 21.1168 372.586 15.6471 424.466 10.2752C470.864 5.47099 512 41.5237 512 88.1697V403C512 445.526 477.526 480 435 480H77C34.4741 480 0 445.526 0 403V88.1697Z"
                        fill="white"
                        fillOpacity="0.05"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M424.568 11.2695C470.394 6.52454 511 42.1348 511 88.1699V403C511 444.974 476.974 479 435 479H77C35.0264 479 1 444.974 1 403V88.1699C1 42.1348 41.6056 6.52454 87.4316 11.2695C139.318 16.642 204.754 22.1172 256 22.1172C307.246 22.1172 372.682 16.642 424.568 11.2695Z"
                        stroke="url(#paint0_linear_11003_5)"
                        strokeWidth="2"
                        shapeRendering="crispEdges"
                    />
                </g>
            </g>

            <defs>
                <filter
                    id="filter0_d_11003_5"
                    x="-25"
                    y="-15.1548"
                    width="562"
                    height="522.555"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="9" />
                    <feGaussianBlur stdDeviation="9.2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_11003_5"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_11003_5"
                        result="shape"
                    />
                </filter>

                <clipPath
                    id="bgblur_1_11003_5_clip_path"
                    transform="translate(25 15.1548)"
                >
                    <path d="M0 88.1697C0 41.5238 41.1363 5.47099 87.5342 10.2752C139.414 15.6471 204.808 21.1168 256 21.1168C307.192 21.1168 372.586 15.6471 424.466 10.2752C470.864 5.47099 512 41.5237 512 88.1697V403C512 445.526 477.526 480 435 480H77C34.4741 480 0 445.526 0 403V88.1697Z" />
                </clipPath>

                <linearGradient
                    id="paint0_linear_11003_5"
                    x1="12"
                    y1="45.0932"
                    x2="307.283"
                    y2="547.718"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.2" />
                    <stop offset="0.52" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.2" />
                </linearGradient>

                <clipPath id="clip0_11003_5">
                    <rect width="512" height="480" fill="rgba(255,255,255,0.05)" />
                </clipPath>
            </defs>
        </svg>
    );
}
