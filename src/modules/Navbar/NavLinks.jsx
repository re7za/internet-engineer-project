const NavLinks = () => {
  return (
    <div className="flex h-full gap-2">
      <a
        className="mx-1 flex h-full items-center px-1 py-1 font-bold text-gray-900 transition hover:border-y-2 hover:border-b-indigo-600 hover:border-t-transparent"
        href="#values"
      >
        ارزش‌ها
      </a>
      <a
        className="mx-1 flex h-full items-center px-1 py-1 font-bold text-gray-900 transition hover:border-y-2 hover:border-b-indigo-600 hover:border-t-transparent"
        href="#samples"
      >
        نمونه کارها
      </a>
      <a
        className="mx-1 flex h-full items-center px-1 py-1 font-bold text-gray-900 transition hover:border-y-2 hover:border-b-indigo-600 hover:border-t-transparent"
        href="#slider"
      >
        اسلایدر
      </a>
      <a
        className="mx-1 flex h-full items-center px-1 py-1 font-bold text-gray-900 transition hover:border-y-2 hover:border-b-indigo-600 hover:border-t-transparent"
        href="#video"
      >
        دیرین دیرین
      </a>
      <a
        className="mx-1 flex h-full items-center px-1 py-1 font-bold text-gray-900 transition hover:border-y-2 hover:border-b-indigo-600 hover:border-t-transparent"
        href="#contact-us"
      >
        تماس با ما
      </a>
    </div>
  );
};

export default NavLinks;
