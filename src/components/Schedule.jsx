import SchedulePosts from "/assets/images/illustration-schedule-posts.webp";
export default function Schedule() {
  return (
    <section
      className="schedule md:relative py-6 px-4 overflow-hidden
    bg-purple-100 rounded-lg md:flex md:flex-col md:justify-between"
    >
      <h2>Schedule to social media.</h2>
      <img
        className="my-4 md:absolute md:top-26 md:left-8 w-80 md:h-55 mx-auto"
        src={SchedulePosts}
      />
      <p className="leading-6 text-center">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </section>
  );
}
