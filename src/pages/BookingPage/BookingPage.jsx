import "./BookingPage.scss";
import BookingForm from "../../components/BookingForm/BookingForm";
import Hero from "../../components/Hero/Hero.jsx";
import background from "../../assets/images/bookingbackground.jpg";

function BookingPage() {
  return (
    <>
    <div className="booking-page">
      <Hero
        backgroundImg={background}
       title="CLAIM YOUR FREE 7-DAY PASS"
        showOverlay={true}
        overlayOpacity={0.72}  // Change opacity of overlay
        overlayColor="0, 0, 0" 
      />
      <BookingForm></BookingForm>
        </div>
    </>
  
  );
}

export default BookingPage;
