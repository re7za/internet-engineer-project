import MainLayout from "layout/MainLayout";

const Footer = () => {
  return (
    <MainLayout component="footer" className="py-8">
      <div className="flex justify-end">
        <a
          target="_blank"
          href="http://www.google.com"
          className=" text-gray-500"
        >
          ورود به سایت ما
        </a>
      </div>
    </MainLayout>
  );
};

export default Footer;
