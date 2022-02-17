import "./App.css";
import ContactUs from "modules/ContactUs";
import Footer from "modules/Footer";
import Map from "modules/Map";
import DatePicking from "modules/DatePicking";
import Calculator from "modules/Calculator";
import EmbededVideo from "modules/EmbededVideo";
import ImageSlider from "modules/ImageSlider";
import Propjects from "modules/Propjects";
import ValueProposition from "modules/ValueProposition";
import Header from "modules/Header";
import FixedBgWrapper from "layout/FixedBgWrapper";
import vbg from "public/video/vbg.jpg";
import pbg from "public/samples/pbg.jpg";
import MainLayout from "layout/MainLayout";

function App() {
  return (
    <body dir="rtl">
      <Header />
      <ValueProposition />
      <FixedBgWrapper bg={pbg} className="h-auto py-8">
        <Propjects />
      </FixedBgWrapper>
      <ImageSlider />
      <FixedBgWrapper bg={vbg} className="h-auto py-40">
        <EmbededVideo />
      </FixedBgWrapper>
      <MainLayout className="my-20 grow lg:flex lg:justify-between">
        <DatePicking />
        <Calculator />
      </MainLayout>
      <Map className="my-20" />
      <div className="bg-gray-100">
        <ContactUs />
      </div>
      <Footer />
    </body>
  );
}

export default App;
