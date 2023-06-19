import React from "react";
import Image from "next/image";

import { IProduct } from "@customTypes/index";

import { FontWeightEnum, Text, TextSizeEnum } from "@components/UI/Text";
import { StarsRating } from "@components/UI/StarsRating";

import styles from "./ProductPage.module.scss";
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
          sizes='10vw'
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

        <div className={styles.starsContainer}>
          <StarsRating
            rating={productData.rating.rate}
            changeRating={(rating) => console.log(rating)}
            name={`productRating=${productData.id}`}
          />
          <Text size={TextSizeEnum.S16}>{productData.rating.rate}/5</Text>
        </div>

        <Text size={TextSizeEnum.S18} fontWeight={FontWeightEnum.FW600}>
          {productData.price}$
        </Text>
      </div>
    </div>
  );
};

ProductPageComponent.displayName = "ProductPage";
