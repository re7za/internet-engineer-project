import bg from "public/bg/bg-header.jpeg";

const Header = () => {
  return (
    <header className="mb-20">
      <div className="h-screen overflow-hidden">
        <div
          className="h-screen w-auto max-w-none bg-cover bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
