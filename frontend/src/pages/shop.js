import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';
import ProductList from '@/components/ProductList';
import Sidebar from '@/components/SideBar';
import { createClient } from '@sanity/client';
import { imageUrlBuilder } from '@sanity/image-url';
import React from 'react'

const shop = ({products}) => {
  return (
    <div>
      <Sidebar bg="bg-bisque-0" />
      <InnerBanner
      inner_banner="shopBanner"
      onPage="Shop"
      />
      <h1 className='lg:text-4xl text-3xl text-center font-bold mt-10 mb-10 text-brown-0'>Our Products</h1>
      <ProductList products={products} />
      <Footer />
    </div>
  )
}

export default shop
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
    const builder = ImageUrlBuilder(client);
    return builder.image(source);
  }
  