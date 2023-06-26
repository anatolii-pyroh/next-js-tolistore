import { GetStaticProps } from "next";

import { getAllProductsData } from "@utils/products";

import { HomePage } from "@views/HomePage";
import { IProduct } from "@customTypes/index";

type Props = {
  productsData: IProduct[];
};

export default function Home({ productsData }: Props) {
  console.log(Math.random());
  return <HomePage productsData={productsData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const productsData = await getAllProductsData();
  return {
    props: {
      productsData,
    },
    revalidate: 10,
  };
};
