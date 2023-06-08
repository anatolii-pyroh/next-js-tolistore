import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { getAllProductsIds, getProductData } from "@utils/products";
import { IProduct } from "@customTypes/index";
import { ProductPage } from "@views/ProductPage";

type Props = {
  productData: IProduct;
};

const Product: React.FC<Props> = ({ productData }) => {
  return <ProductPage productData={productData} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductsIds();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productData = await getProductData(params?.id as string);
  return {
    props: {
      productData,
    },
    revalidate: 10,
  };
};

export default Product;
