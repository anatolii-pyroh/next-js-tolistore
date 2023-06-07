import React from "react";
import { IProduct } from "@customTypes/index";

import styles from "./ProductPage.module.scss";
import Image from "next/image";
import { Text, TextSizeEnum } from "@components/UI/Text";
type Props = {
  productData: IProduct;
};

export const ProductPageComponent: React.FC<Props> = ({ productData }) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <Image
          src={productData.image}
          className={styles.productImage}
          alt='productImg'
          fill
          priority
        />
      </div>
      <Text size={TextSizeEnum.S18}>{productData.description}</Text>
    </div>
  );
};

ProductPageComponent.displayName = "ProductPage";
