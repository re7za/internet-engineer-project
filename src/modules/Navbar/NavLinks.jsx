const ancherClassName =
  "mx-1 py-4 flex md:h-full items-center px-1 md:py-1 font-bold text-gray-900 transition md:hover:border-y-2 md:hover:border-b-indigo-600 md:hover:border-t-transparent";

const NavLinks = ({ click }) => {
  return (
    <div className="flex flex-col md:h-full md:flex-row md:gap-2">
      <a
        className={ancherClassName}
        href="#values"
        onClick={() => click && click()}
      >
        ارزش‌ها
      </a>
      <a
        className={ancherClassName}
        href="#samples"
        onClick={() => click && click()}
      >
        نمونه کارها
      </a>
      <a
        className={ancherClassName}
        href="#slider"
        onClick={() => click && click()}
      >
        اسلایدر
      </a>
      <a
        className={ancherClassName}
        href="#video"
        onClick={() => click && click()}
      >
        دیرین دیرین
      </a>
      <a
        className={ancherClassName}
        href="#contact-us"
        onClick={() => click && click()}
      >
        تماس با ما
      </a>
    </div>
  );
};

export default NavLinks;
