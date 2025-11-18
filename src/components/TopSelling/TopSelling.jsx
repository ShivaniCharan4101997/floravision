import styles from './TopSelling.module.css';

const plants = [
    {
        img: "Aglaonema.svg",
        name: "Aglaonema Plant",
        des: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.",
        price: "300",
        link: "#"
    },
    {
        img: "PlantainLilies.svg",
        name: "Plantain Lilies",
        des: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        price: "300",
        link: "#"
    },
    {
        img: "Cactus.svg",
        name: "Cactus",
        des: "It is known for their ability to thrive in arid environments",
        price: "300",
        link: "#"
    },
    {
        img: "SwissChesse.svg",
        name: "Swiss cheese Plant",
        des: "It is a popular tropical houseplant known for its distinctive, perforated leaves,",
        price: "400",
        link: "#"
    },
    {
        img: "Sensevieria.svg",
        name: "Sansevieria plant",
        des: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
        price: "450",
        link: "#"
    },
    {
        img: "Agave.svg",
        name: "Agave plant",
        des: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
        price: "359",
        link: "#"
    },
]







export default function TopSelling() {
    return (
        <section>
            <div className={styles.heading}>
                <img src="/topSellingHeading.svg" alt="our best selling" />
            </div>

            <div className={styles.cardsGrid}>
                {plants.map((plant, i) => (
                    <Card key={i} data={plant} />
                ))}
            </div>
        </section>
    );
}


export function Card({ data }) {
    return (
        <div className={styles.card}>
            <CurveCardSvg className={styles.bg} />

            <img src={data.img} className={styles.plantImg} alt={data.name} />

            <div className={styles.inner}>
                <div className={styles.cardContent}>
                    <h2>{data.name}</h2>
                    <p>{data.des}</p>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.priceBox}>
                        <h3>Rs. {data.price}/-</h3>
                    </div>

                    <img src="/Bag.svg" alt="" />
                </div>

            </div>
        </div>

    );
}


export function CurveCardSvg() {

    return (
        <svg  viewBox="0 0 512 631" fill="none" xmlns="http://www.w3.org/2000/svg" >
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