import "./BookingPage.scss";
import BookingForm from "../../components/BookingForm/BookingForm";
import Hero from "../../components/Hero/Hero.jsx";
import background from "../../assets/images/bookingbackground.jpg";

function BookingPage() {
  return (
    <>
      <Hero
        backgroundImg={background}
        title={
          <>
            <h1 className="booking-page__title">CLAIM YOUR FREE 7-DAY PASS</h1>
          </>
        }
        showOverlay={true}
        overlayOpacity={0.72}  // Change opacity of overlay
        overlayColor="0, 0, 0" 
      />
      <BookingForm></BookingForm>
    </>
  );
}

export default BookingPage;
