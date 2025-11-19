import styles from './TopSelling.module.css';
import Card from "../SquareCard/Card.jsx"

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




