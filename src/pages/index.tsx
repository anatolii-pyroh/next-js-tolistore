import { GetStaticProps } from "next";

import { getAllProducts } from "@utils/products";
import { IProduct } from "@customTypes/index";
import { Product } from "@components/product";

interface IProps {
  productsData: IProduct[];
}

export default function Home({ productsData }: IProps) {
  return (
    <div>
      {productsData.map((product: IProduct, index: number) => (
        <Product product={product} index={index} key={product.id} />
      ))}
    </div>
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
