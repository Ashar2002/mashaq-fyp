import Footer from "@/components/Footer";
import Product from "@/components/Product";
import Recommendations from "@/components/Recommendations";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import React from "react";

const InnerProduct = ({bg, products, mainCategory,subCategory }) => {
  const router = useRouter();
  const { id } = router.query;
  const filteredProduct = products.filter((item) => {
    return item._id === id[0];
  });
  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <Product products={filteredProduct} mainCategory={mainCategory} subCategory={subCategory} />
      <Recommendations />
      <Footer />
    </div>
  );
};

export default InnerProduct;
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "q5r6hvs1",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-08-22",
  });
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  const category = `*[_type == "maincategory"]`;
  const mainCategory = await client.fetch(category);
  const subcategoryQuery = `*[_type == "subCategory"]`;
  const subCategory = await client.fetch(subcategoryQuery);

  return {
    props: {
      products,
      mainCategory,
      subCategory,
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
