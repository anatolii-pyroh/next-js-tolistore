import classNames from "classnames";
import Image from "next/image";

import { IProduct } from "@customTypes/index";

import styles from "./Product.module.scss";
import { CustomLink, Text, TextSizeEnum } from "@components/UI/Text";

type TProps = {
  product: IProduct;
  index?: number;
};

export const ProductComponent: React.FC<TProps> = ({ product }) => {
  const productClassName = classNames(styles.product, "myTransition");

  return (
    <div className={productClassName}>
      <Text size={TextSizeEnum.S14} className={styles.productCategory}>
        {product.category}
      </Text>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt='productImg'
          fill
          sizes='25vw'
          className={styles.productImg}
          priority
        />
      </div>
      <CustomLink
        href={`products/${product.id}`}
        size={TextSizeEnum.S16}
        className={styles.productTitle}
      >
        {product.title}
      </CustomLink>
      <div className={styles.ratingAndPrice}>
        <Text size={TextSizeEnum.S14}>Rating: {product.rating.rate}/5</Text>
        <Text size={TextSizeEnum.S16}>{product.price.toFixed(2)}$</Text>
      </div>
    </div>
  );
};

ProductComponent.displayName = "Product";
