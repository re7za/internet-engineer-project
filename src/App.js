import "./App.css";
import ContactUs from "modules/ContactUs";
import Footer from "modules/Footer";
import Map from "modules/Map";
import DatePicking from "modules/DatePicking";
import EmbededVideo from "modules/EmbededVideo";
import ImageSlider from "modules/ImageSlider";
import Propjects from "modules/Propjects";
import ValueProposition from "modules/ValueProposition";
import Header from "modules/Header";

function App() {
  return (
    <body dir="rtl">
      <Header />
      <ValueProposition />
      <Propjects />
      <ImageSlider />
      <EmbededVideo />
      <DatePicking />
      <Map className="my-20" />
      <div className="bg-gray-100">
        <ContactUs />
      </div>
      <Footer />
    </body>
  );
}

export default App;
