import Button from "components/Button";

const Dialog = (props) => {
  const { children, open, onClose, title, buttons } = props;
  return open ? (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 z-20 flex flex-row items-center justify-center backdrop-blur-sm`}
      style={{ backgroundColor: "#42424280" }}
      onClick={onClose}
    >
      <div
        className="flex w-11/12 flex-col border-2 border-gray-200 bg-white py-2 px-4 md:w-2/3 lg:w-2/3 xl:w-1/3"
        style={{ maxHeight: `calc(100vh - 40px)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{title}</h3>
          <button
            className="rounded-lg px-2 text-xl font-bold text-gray-500 outline-none"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <div className="overflow-auto py-5">{children}</div>
        {buttons?.length > 0 && (
          <div className="flex justify-start">
            {buttons?.map(({ className, ...otherProps }, i) => (
              <Button key={i} className={`ml-2 ${className}`} {...otherProps} />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Dialog;
