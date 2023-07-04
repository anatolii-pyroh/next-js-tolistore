import { GetStaticProps } from "next";

import { getAllProductsData } from "@utils/products";
import { IProduct } from "@customTypes/index";
import dynamic from "next/dynamic";

type Props = {
  productsData: IProduct[];
};

const HomePage = dynamic<Props>(() =>
  import("@views/HomePage").then((mod) => mod.HomePage)
);

export default function Home({ productsData }: Props) {
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
