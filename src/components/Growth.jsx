import AudienceGrowth from "/assets/images/illustration-audience-growth.webp";
import { FaAngleRight } from "react-icons/fa6";

export default function Growth() {
  return (
    <section className="growth lg:flex lg:flex-col gap-4 p-4 bg-white rounded-lg">
      <div className="flex items-center text-3xl lg:text-5xl">
        <FaAngleRight />
        <span>56%</span>
      </div>
      <p className="mb-2"> faster audience growth </p>
      <img className="w-30 lg:w-40" src={AudienceGrowth} />
    </section>
  );
}
