import MainLayout from "layout/MainLayout";

const EmbededVideo = () => {
  return (
    <MainLayout>
      <iframe
        title="فیلم از آپارات"
        src="https://www.aparat.com/video/video/embed/videohash/E0q89/vt/frame"
        allowFullScreen
        width="100%"
        height="600"
        className="border-0"
        loading="lazy"
      />
    </MainLayout>
  );
};

export default EmbededVideo;
