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
      <ImageUpload />
      <BestSelling />
      <Footer />
    </div>
  );
}
