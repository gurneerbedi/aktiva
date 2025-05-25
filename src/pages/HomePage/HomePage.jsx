import "./HomePage.scss";
import Banner from "../../components/Banner/Banner.jsx"
import Buildyourbody from "../../components/Buildyourbody/Buildyourbody.jsx";
import Amenities from "../../components/Amenities/Amenities.jsx";
function HomePage() {
    return (
        <>
        <div className="homepage">
            <h1 className="homepage__heading-small">LIVE YOUR BEST LIFE</h1>
            <h1 className="homepage__heading-big">STAY ACTIVE</h1>
            <button className="homepage__button">Start Your Training</button>
        </div>
        <Buildyourbody/>
        <Amenities></Amenities>
        <Banner></Banner>
        </>
    )
}

export default HomePage;