import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="text-7xl">
            <Banner/>
            <AboutUs/>
            <Services/>
        </div>
    );
};

export default Home;