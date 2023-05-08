import { GetStaticProps } from "next";

import { getAllProductsData } from "@utils/products";
import { IProduct } from "@customTypes/index";
import { Product } from "@components/Product";

import styles from "@styles/Home.module.scss";
import { Input } from "@components/UI/Input";
import { useState } from "react";
import { IconsEnum, SvgIcon } from "@components/UI/SvgIcon";

interface IProps {
  productsData: IProduct[];
}

export default function Home({ productsData }: IProps) {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <div className={styles.home}>
      <Input
        id='keyword'
        value={searchKeyword}
        className={styles.searchInput}
        label='Search product by its title'
        placeholder='Enter keyword...'
        leftBlock={
          <SvgIcon
            src={IconsEnum.search}
            style={{ alignSelf: "center", height: "100%", marginLeft: "10px" }}
          />
        }
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <div className={styles.productsList}>
        {productsData
          .filter((product: IProduct) =>
            product.title.toLowerCase().includes(searchKeyword.toLowerCase())
          )
          .map((product: IProduct, index: number) => (
            <Product product={product} index={index} key={product.id} />
          ))}
      </div>
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
