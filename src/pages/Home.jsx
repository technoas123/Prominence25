import HeroSection from "../components/HeroSection";
import Events from "../components/Events";
import About from "../components/About";
import CarouselGallery from "../components/CarouselGallery";
import Contact from "../components/Contact";

const Home = () => {
    return(
        <div className="home">
            <HeroSection />
            <Events />
            <About />
            <CarouselGallery />
            <Contact />
        </div>
    );
};

export default Home;