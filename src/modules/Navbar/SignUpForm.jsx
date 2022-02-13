import TextField from "components/TextField";

const SignUpForm = ({ openLogIn }) => {
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
      <div className="w-full">
        <label for="email" className="text-sm">
          ایمیل
        </label>
        <TextField
          className="mt-2 w-full"
          name="email"
          placeholder="ایمیل خود را وارد کنید"
        />
      </div>
      <div className="flex w-full justify-end">
        <button
          className="float-left text-sm text-gray-500"
          onClick={() => openLogIn && openLogIn()}
        >
          قبلا ثبت‌نام کرده ام!
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
