import FiveStar from "/assets/images/illustration-five-stars.webp";
export default function Rating() {
  return (
    <section
      className="rating flex flex-col items-center justify-center leading-10 
     p-6 bg-purple-500 text-white rounded-lg"
    >
      <h1 className="text-white text-center mb-4 lg:leading-14">
        Social Media <span className="text-yellow-500">10x</span> Faster with AI
      </h1>
      <img className="w-36" src={FiveStar} />
      <p className="text-center">Over 4,000 5-star reviews</p>
    </section>
  );
}
