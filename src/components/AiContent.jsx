import AIChat from "/assets/images/illustration-ai-content.webp";

export default function AiContent() {
  return (
    <section className="ai-content p-4 rounded-lg bg-yellow-500">
      <h2 className="mb-4">Write your content using Ai.</h2>
      <img className="w-60" src={AIChat} />
    </section>
  );
}
