import CreatePost from "/assets/images/illustration-create-post.webp";

export default function Create() {
  return (
    <section className="create p-4 rounded-lg bg-yellow-100">
      <h2 className="mb-4">
        Create and schedule content
        <span className="text-purple-500 italic"> quicker.</span>
      </h2>
      <img className="w-35 lg:w-45" src={CreatePost} />
    </section>
  );
}
