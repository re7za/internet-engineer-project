const EmbededVideo = () => {
  return (
    <div class="mx-auto max-w-7xl">
      <iframe
        title="فیلم از آپارات"
        src="https://www.aparat.com/video/video/embed/videohash/E0q89/vt/frame"
        allowFullScreen
        width="100%"
        height="600"
        className="border-0"
        loading="lazy"
      />
    </div>
  );
};

export default EmbededVideo;
