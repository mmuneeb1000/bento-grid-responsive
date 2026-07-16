import GrowFollowers from "/assets/images/illustration-grow-followers.webp";
export default function Follower() {
  return (
    <section
      className="follower flex flex-col bg-purple-500 lg:flex-row lg:gap-8 
    items-center px-12 py-4 rounded-lg"
    >
      <img className="w-50 lg:w-55" src={GrowFollowers} />
      <h2 className="mt-4 text-white">Grow followers with non-stop content</h2>
    </section>
  );
}
