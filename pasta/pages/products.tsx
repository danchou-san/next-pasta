import React from "react";
import { GetStaticProps } from "next";
import client from '../contentful';
import Link from "next/link";

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

const Products = ({ products }: ProductsProps) => {
  const productList = products[0].products.items;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productList.map((product) => (
          // <li key={product.id}>{product.name}</li>
          // <li key={product.id}><a href={`/product/${product.id}`}>{product.name}</a></li>
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;