import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import { Hero } from "../../components/hero/Hero";
import PopularFood from "../../components/food/popularFood/PopularFood";
import RecommendedFood from "../../components/food/popularFood/RecomendedFood";
import { Footer } from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <Navbar />
        <Hero />
        <PopularFood />
        <RecommendedFood />
      </div>
      <Footer />
    </>
  );
};

export default Home;
