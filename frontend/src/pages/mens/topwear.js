import ProductList from '@/components/ProductList';
import { createClient } from '@sanity/client';
import { imageUrlBuilder } from '@sanity/image-url';
import React from 'react'

const topwear = ({products}) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default topwear
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
  