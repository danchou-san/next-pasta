import React from "react";
import { GetStaticProps } from "next";
import { useRouter } from 'next/router'
import client from "../../contentful";

interface Product {
  id: string;
  name: string;
  description: string;
  features: string;
  price: string;
  keywords: string;
  url: string;
  category: string;
  subcategory: string;
};

interface Products {
  products: {
    items: Product[];
  }
}

interface ProductProps {
  products: Product[];
}

interface ProductsProps {
  products: Products[],
}

export const getStaticProps: GetStaticProps<ProductProps> = async () => {
  const products = await client.getEntries<Product>({
    content_type: 'product',
  });
  
  return {
    props: {
      products: products.items.map((item) => item.fields),
    }
  };
};

const ProductDetails = ({ products }: ProductsProps) => {
  const router = useRouter();
  const { id } = router.query;
  const productList = products[0].products.items;
  console.log(productList);

  return (
    <div>ProductDetails for {id}</div>
  );
};

export default ProductDetails;