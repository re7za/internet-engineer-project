import TextField from "components/TextField";

const LogInForm = ({ openSignUp }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-start gap-4 pt-4"
    >
      <div className="w-full">
        <label for="username" className="text-sm">
          نام کاربری
        </label>
        <TextField
          className="mt-2 w-full"
          name="username"
          placeholder="نام کاربری خود را وارد کنید"
        />
      </div>
      <div className="w-full">
        <label for="password" className="text-sm">
          رمزعبور
        </label>
        <TextField
          className="mt-2 w-full"
          name="password"
          placeholder="رمزعبور خود را وارد کنید"
        />
      </div>
      <div className="flex w-full justify-end">
        <button
          className="float-left text-sm text-gray-500"
          onClick={() => openSignUp && openSignUp()}
        >
          ثبت نام
        </button>
      </div>
    </form>
  );
};

export default LogInForm;
