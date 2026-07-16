import ConsistentSchedule from "/assets/images/illustration-consistent-schedule.webp";
export default function Posting() {
  return (
    <section
      className="posting relative overflow-hidden px-4 pt-4 
    pb-24 bg-yellow-500 rounded-lg"
    >
      <h2 className="mb-2">Maintain a consistent posting schedule.</h2>
      <img className="absolute w-45 md:w-50" src={ConsistentSchedule} />
    </section>
  );
}
