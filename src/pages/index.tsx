import { GetStaticProps } from "next";

import { getAllProducts } from "../utils/products";
import { IProduct } from "../utils/types";
import { Layout } from "@components/layout";

interface IProps {
  productsData: IProduct[];
}

export default function Home({ productsData }: IProps) {
  return (
    <Layout>
      <div style={{ border: "1px solid black" }}>
        {productsData.map((product: IProduct) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const productsData = await getAllProducts();
  return {
    props: {
      productsData,
    },
  };
};
