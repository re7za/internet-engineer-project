import Button from "components/Button";
import TextField from "components/TextField";

const ContactUs = () => {
  return (
    <div className="p-10">
      <h4 className="mb-8 text-center text-xl font-bold">تماس با ما</h4>
      <div className="flex flex-col-reverse justify-center md:flex-row">
        <div>
          <div className="flex flex-col md:flex-row">
            <TextField placeholder="نام" className="my-2 md:ml-2" />
            <TextField placeholder="ایمیل" className="my-2 md:mr-2" />
          </div>
          <div>
            <TextField
              component="textarea"
              placeholder="نظر خود را بنویسید"
              rows="6"
              resize={false}
              className="my-2 w-full"
            />
          </div>
          <Button>ارسال</Button>
        </div>
        <div className="md:mr-8">
          <h6 className="mb-2 font-semibold text-gray-600">
            با ما در ارتباط باشید
          </h6>
          <div className="mt-5">
            <div className="mb-2 text-sm text-gray-500">تهران، تهران</div>
            <div className="mb-2 text-sm text-gray-500">09991234455</div>
            <div className="mb-2 text-sm text-gray-500">syd.id7@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
