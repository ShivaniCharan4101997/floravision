import  styles from "./TrendyPlants.module.css"
import TrendyPlantCard from "../RectangleCard/Card.jsx";

export default function TrendyPlants() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.heading}>
                <img src="/trendyPlantHeading.svg" alt="our trendy plants" />
            </div>

            {/* CARD 1 */}
            <TrendyPlantCard
                title="For Your Desks Decorations"
                desc="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
                price="599"
                img="/PlantainLilies.svg"
                reverse={false}
            />

            {/* CARD 2 */}
            <TrendyPlantCard
                title="For Your Desks Decorations"
                desc="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming."
                price="399"
                img="/trendyPlant2.svg"
                reverse={true}
            />
        </section>
    );
}









