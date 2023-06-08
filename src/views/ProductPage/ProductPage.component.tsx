import React from "react";
import { IProduct } from "@customTypes/index";
import Image from "next/image";

import styles from "./ProductPage.module.scss";

import { FontWeightEnum, Text, TextSizeEnum } from "@components/UI/Text";
import { StarsRating } from "@components/UI/StarsRating";

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
      <div className={styles.productInfo}>
        <Text size={TextSizeEnum.S16}>
          <b>Title:</b> {productData.title}
        </Text>
        <Text size={TextSizeEnum.S16}>
          <b>Category:</b> {productData.category}
        </Text>
        <Text size={TextSizeEnum.S16}>
          <b>Description:</b> {productData.description}
        </Text>
        <Text size={TextSizeEnum.S16}>
          <StarsRating
            rating={productData.rating.rate}
            changeRating={(rating) => console.log(rating)}
            name='productRating'
          />{" "}
          {productData.rating.rate}/5
        </Text>
        <Text size={TextSizeEnum.S18} fontWeight={FontWeightEnum.FW600}>
          {productData.price}$
        </Text>
      </div>
    </div>
  );
};

ProductPageComponent.displayName = "ProductPage";
