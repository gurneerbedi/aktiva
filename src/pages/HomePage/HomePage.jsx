import "./HomePage.scss";
import Banner from "../../components/Banner/Banner.jsx"
import Buildyourbody from "../../components/Buildyourbody/Buildyourbody.jsx";
import Amenities from "../../components/Amenities/Amenities.jsx";
import HomeBackgroundImg from "../../assets/images/homebackground.jpeg"
function HomePage() {
    return (
        <>
        <div className="homepage">
            <div className="homepage__header">
            <h1 className="homepage__heading-small">LIVE YOUR BEST LIFE</h1>
            <h1 className="homepage__heading-big">STAY ACTIVE</h1>
            <button className="homepage__button">Start Your Training Today</button>
            </div>
            <div className="homepage__process">
                <h2 className="homepage__heading">AKTIVA TRANSFORMATION PROCESS</h2>
                <p className="homepage__details">Our tested and proven approach to get you where you want to be.</p>
            </div>
        </div>
        <Buildyourbody/>
        <Amenities></Amenities>
        <Banner></Banner>
        </>
    )
}

export default HomePage;