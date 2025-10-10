import Navbar from "@/components/Navbar";
import Nav from "../Nav";
import Overview from "./Overview";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-neutral-dark flex items-start justify-between">
        <Nav />
        <Overview />
      </section>
    </>
  );
};

export default page;
