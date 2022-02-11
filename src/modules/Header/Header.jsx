import Backdrop from "components/Backdrop";
import Button from "components/Button";
import Dialog from "components/Dialog";
import bg from "public/bg/bg-header.jpeg";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <header className="mb-20">
      <div className="h-screen overflow-hidden">
        <div
          className="h-screen w-auto max-w-none bg-cover bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <Button onClick={openModal}>بکدراپ</Button>
          <Dialog
            open={open}
            onClose={closeModal}
            title="فرم ثبت نام"
            buttons={[{ children: "ok" }, { children: "no" }]}
          >
            helllo
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
