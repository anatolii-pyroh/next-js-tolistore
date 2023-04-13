import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { getAllProductsIds, getProductData } from "@utils/products";
import { IProduct } from "@customTypes/index";

interface IProps {
  productData: IProduct;
}

const Product: React.FC<IProps> = ({ productData }) => {
  return (
    <>
      <div>{JSON.stringify(productData)}</div>{" "}
      <Link href='/'>← Back to home</Link>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productData = await getProductData(params?.id as string);
  return {
    props: {
      productData,
    },
  };
};

export default Product;
