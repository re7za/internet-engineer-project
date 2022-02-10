import "./App.css";
import ContactUs from "modules/ContactUs";
import Footer from "modules/Footer";

function App() {
  return (
    <body dir="rtl">
      <div className="bg-gray-100">
        <ContactUs />
      </div>
      <Footer />
    </body>
  );
}

export default App;
