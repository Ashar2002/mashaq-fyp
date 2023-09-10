import Banner from "@/components/Banner";
import Sidebar from "@/components/SideBar";
import Search from "@/components/Search";
import BestSelling from "@/components/BestSelling";
import ImageUpload from "@/components/ImageUpload";
import Footer from "@/components/Footer";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import ChatBot from "@/components/ChatBot";

export default function Home({ products }) {
  return (
    <div className="relative">
      <Sidebar />
      <div className="">
        <Banner />
      </div>
      <ChatBot />
      <Search products={products}/>
      <ImageUpload />
      <BestSelling products={products} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "q5r6hvs1",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-08-22",
  });
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
}

export function urlFor(source) {
  const client = createClient({
    projectId: "q5r6hvs1",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-09-05",
  });
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}
