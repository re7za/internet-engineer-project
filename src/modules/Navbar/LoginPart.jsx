import Button from "components/Button";

const LoginPart = ({ openModal }) => {
  return (
    <div className="flex gap-2 md:ml-2 lg:ml-0">
      <Button onClick={() => openModal("sign_up")}>ثبت‌نام</Button>
      <Button onClick={() => openModal("log_in")}>ورود</Button>
    </div>
  );
};

export default LoginPart;
