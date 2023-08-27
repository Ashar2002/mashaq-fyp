import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import { FaBeer, FaShoppingBag } from "react-icons/fa";
import Sidebar from "@/components/SideBar";
import Header from "@/components/Header";
import Search from "@/components/Search";
import BestSelling from "@/components/BestSelling";
import ImageUpload from "@/components/ImageUpload";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Sidebar />
      {/* <Header /> */}
      <div className="bg-[#020411]">
        <Banner />
      </div>
      <Search />
      <ImageUpload />
      <BestSelling />
      <Footer />
    </>
  );
}
