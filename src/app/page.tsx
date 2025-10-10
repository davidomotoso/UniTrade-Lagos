import Image from "next/image";
import banner from "../../public/banner.png";
import Catergories from "./Catergories";
import Hero from "./Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="flex gap-6 h-[33rem]">
        <Catergories />
        <Image
          src={banner}
          alt="banner"
          className="w-full object-cover bg-primary rounded-sm pl-5"
        />
      </section>
      <Hero />
    </>
  );
};
export default Home;
