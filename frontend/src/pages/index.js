import Banner from "@/components/Banner";
import Sidebar from "@/components/SideBar";
import Search from "@/components/Search";
import BestSelling from "@/components/BestSelling";
import ImageUpload from "@/components/ImageUpload";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Sidebar />
      {/* <Header /> */}

      <div className="">
        <Banner />
      </div>
      {/* client men jake wahan add krdena  */}
      <Search />
      <BestSelling />
<<<<<<< HEAD
      <ImageUpload />
=======
      <div className="w-20 h-20 bg-black flex justify-center items-center fixed bottom-10 right-10 rounded-full z-[99999]">
        <span className="text-white">call</span>
      </div>
>>>>>>> c45de058fa4b480c5431615b38256be926d46485
      <Footer />
    </div>
  );
}
