import FixedBgWrapper from "layout/FixedBgWrapper";
import Navbar from "modules/Navbar";
import bg from "public/bg/bg-header.jpeg";

const Header = () => {
  return (
    <header className="mb-20">
      <FixedBgWrapper bg={bg} className="h-screen">
        <Navbar />
      </FixedBgWrapper>
    </header>
  );
};

export default Header;
