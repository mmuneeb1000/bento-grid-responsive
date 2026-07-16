import Account from "./components/Account";
import AiContent from "./components/AiContent";
import Create from "./components/Create";
import Follower from "./components/Follower";
import Growth from "./components/Growth";
import Posting from "./components/Posting";
import Rating from "./components/Rating";
import Schedule from "./components/Schedule";

export default function App() {
  return (
    <>
      <main className="flex flex-col md:grid gap-4 py-6 px-4">
        <Rating />
        <Account />
        <Posting />
        <Schedule />
        <Follower />
        <Growth />
        <Create />
        <AiContent />
      </main>
    </>
  );
}
