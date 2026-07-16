import MultiplePlatforms from "/assets/images/illustration-multiple-platforms.webp";
export default function Account() {
  return (
    <section className="account p-4 bg-white rounded-lg">
      <img className="w-100" src={MultiplePlatforms} />
      <h2 className="leading-7">Manage multiple accounts and platforms</h2>
    </section>
  );
}
