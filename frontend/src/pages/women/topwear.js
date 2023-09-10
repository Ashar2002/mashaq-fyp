import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/SideBar";
import { createClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";
import React from "react";

const footwear = ({ products, subCategory, mainCategory }) => {
  const mc = mainCategory;
  const filteredProduct = products.filter((item) => {
    return (
      item.mainCategory._ref ===
        mainCategory.find((cat) => cat.title === "Female")._id &&
      item.subCategory._ref ===
        subCategory.find((cat) => cat.title === "Womens top wear")._id
    );
  });
  console.log(mainCategory, "check mainCategory");
  console.log(subCategory, "check subCategory");

  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner inner_banner="shopBanner" onPage="Foot Wear" />
      <ProductList title="Foot Wear Products" products={filteredProduct} />
      <Footer />
    </div>
  );
};

export default footwear;
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "q5r6hvs1",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-08-22",
  });
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  const MainCategoryquery = `*[_type == "maincategory"]`;
  const mainCategory = await client.fetch(MainCategoryquery);
  const SubCategoryquery = `*[_type == "subCategory"]`;
  const subCategory = await client.fetch(SubCategoryquery);

  return {
    props: {
      products,
      subCategory,
      mainCategory,
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
