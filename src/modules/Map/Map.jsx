const Map = ({ className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <iframe
        src="https://balad.ir/embed?p=6vAfcoBKwMuuJu"
        title="مشاهده «ایستگاه مترو دانشگاه امام علی» روی نقشه بلد"
        width="100%"
        height="400"
        allowFullScreen
        aria-hidden="false"
        className="border-0"
        loading="lazy"
      />
    </div>
  );
};

export default Map;
