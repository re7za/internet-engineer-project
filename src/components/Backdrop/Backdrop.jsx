const Backdrop = (props) => {
  const { open, onClick, transparent, className } = props;
  return (
    <>
      {!!open && (
        <div
          className={`fixed top-0 right-0 left-0 bottom-0 z-10 h-screen w-screen cursor-default overflow-hidden ${
            transparent
              ? "bg-transparent backdrop-blur-none"
              : "backdrop-blur-sm"
          } ${className}`}
          style={!transparent ? { backgroundColor: "#42424280" } : {}}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default Backdrop;
