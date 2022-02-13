const FixedBgWrapper = ({ bg, className, children }) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`w-auto max-w-none bg-cover bg-fixed bg-center bg-no-repeat ${className}`}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FixedBgWrapper;
