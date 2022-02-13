import Button from "components/Button";

const LoginPart = ({ openModal }) => {
  return (
    <div className="ml-2 flex gap-2">
      <Button onClick={() => openModal("sign_up")}>ثبت‌نام</Button>
      <Button onClick={() => openModal("log_in")}>ورود</Button>
    </div>
  );
};

export default LoginPart;
