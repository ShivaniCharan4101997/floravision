import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OurBestO2 from "./components/OutBestO2/OurBestO2.jsx";
import Review from "./components/CustomerReview/Review.jsx";
import TopSelling from "./components/TopSelling/TopSelling.jsx";
import TrendyPlants from "./components/TrendyPlants/TrendyPlant.jsx";


const App = () => {
    return (
        <>
        {/*  header and navbar*/}
            <div className="main">
                <img src="/heroBg.svg" alt="hero background" className="heroBg"/>
                <div className="container">
                    <Header />
                    {/*    hero*/}
                    <Hero/>
                </div>

            </div>
    <div className="container">

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
        </>
    );
};

export default App;