import MainLayout from "layout/MainLayout";
import { useEffect, useRef, useState } from "react";
import Dialog from "components/Dialog";
import LoginPart from "./LoginPart";
import NavLinks from "./NavLinks";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import Backdrop from "components/Backdrop";
import { AiOutlineMenu, AiOutlineRight } from "react-icons/ai";

const NAV_HEIGHT = 65;
const Navbar = () => {
  const navbarRef = useRef(null);
  const prevScrollRef = useRef(0);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const [open, setOpen] = useState(undefined);
  const openModal = (val) => setOpen(val);
  const closeModal = () => setOpen(undefined);

  const setScrollDir = () => {
    const isScrollDown = prevScrollRef.current <= window.scrollY;
    return isScrollDown;
  };

  const handleScroll = (_) => {
    const isScrollDown = setScrollDir();
    if (isScrollDown) {
      if (window.scrollY > window.innerHeight - NAV_HEIGHT)
        navbarRef.current.style.transform = `translateY(-${NAV_HEIGHT}px)`;
    } else {
      navbarRef.current.style.transform = "translateY(0px)";
    }

    prevScrollRef.current = window.scrollY;
  };

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <div className="md:hidden">
        <Backdrop open={sidebarOpen} onClick={closeSidebar} className="z-20" />
      </div>
      <div
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-10 bg-white shadow-xl transition md:block"
        style={{ height: `${NAV_HEIGHT}px` }}
      >
        <MainLayout className="flex h-full items-center justify-between">
          <div className="hidden h-full md:block">
            <NavLinks />
          </div>
          <button className="mx-2 p-3 md:hidden" onClick={openSidebar}>
            <AiOutlineMenu className="text-xl font-bold" />
          </button>
          <LoginPart openModal={openModal} />
        </MainLayout>
      </div>
      <div
        className="fixed top-0 bottom-0 right-0 z-30 w-3/4 bg-white shadow-xl transition md:hidden"
        style={{
          transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="mb-5 flex justify-end">
          <button className="m-2 p-3" onClick={closeSidebar}>
            <AiOutlineRight className="text-xl font-bold" />
          </button>
        </div>
        <NavLinks click={closeSidebar} />
      </div>
      <Dialog
        open={!!open}
        onClose={closeModal}
        title={open === "sign_up" ? "فرم ثبت‌نام" : "فرم ورود"}
        buttons={[
          {
            children: open === "sign_up" ? "ثبت نام" : "ورود",
            onClick: closeModal,
          },
          {
            children: "انصراف",
            onClick: closeModal,
          },
        ]}
      >
        {
          {
            sign_up: <SignUpForm openLogIn={() => setOpen("log_in")} />,
            log_in: <LogInForm openSignUp={() => setOpen("sign_up")} />,
          }[open]
        }
      </Dialog>
    </div>
  );
};

export default Navbar;
