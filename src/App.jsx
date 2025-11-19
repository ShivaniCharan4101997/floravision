import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OurBestO2 from "./components/OutBestO2/OurBestO2.jsx";
import Review from "./components/CustomerReview/Review.jsx";
import TopSelling from "./components/TopSelling/TopSelling.jsx";
import TrendyPlants from "./components/TrendyPlants/TrendyPlant.jsx";


const App = () => {
    return (
        <div className="container">
        {/*  header and navbar*/}

            <div className="main">
                <Header />
                {/*    hero*/}
                <Hero/>
            </div>

        {/*    trendy plant*/}
            <TrendyPlants/>

        {/*top-selling*/}
            <TopSelling/>
        {/*customer review*/}
            <Review/>
        {/*    our best o2*/}
            <OurBestO2/>

        {/*    footer*/}
            <Footer/>
        </div>
    );
};

export default App;