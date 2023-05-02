import { GetStaticProps } from "next";

import { getAllProductsData } from "@utils/products";
import { IProduct } from "@customTypes/index";
import { Product } from "@components/Product";

import styles from "@styles/Home.module.scss";
import Link from "next/link";

interface IProps {
  productsData: IProduct[];
}

export default function Home({ productsData }: IProps) {
  return (
    <div className={styles.home}>
      <Link href='/abc'>abc</Link>
      {productsData.map((product: IProduct, index: number) => (
        <Product product={product} index={index} key={product.id} />
      ))}
    </div>
  );
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
