import "./HomePage.scss";
import Banner from "../../components/Banner/Banner.jsx"
import Buildyourbody from "../../components/Buildyourbody/Buildyourbody.jsx";
import Amenities from "../../components/Amenities/Amenities.jsx";
function HomePage() {
    return (
        <>
        <h1>HomePage</h1>
        <Buildyourbody/>
        <Amenities></Amenities>
        <Banner></Banner>
        </>
    )
}

export default HomePage;