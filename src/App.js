import "./App.css";
import ContactUs from "modules/ContactUs";
import Footer from "modules/Footer";
import Map from "modules/Map";
import DatePicking from "modules/DatePicking";
import EmbededVideo from "modules/EmbededVideo";
import ImageSlider from "modules/ImageSlider";

function App() {
  return (
    <body dir="rtl">
      <ImageSlider />
      <EmbededVideo />
      <DatePicking />
      <Map className="my-10" />
      <div className="bg-gray-100">
        <ContactUs />
      </div>
      <Footer />
    </body>
  );
}

export default App;
