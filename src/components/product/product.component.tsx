import classNames from "classnames";
import Image from "next/image";

import { IProduct } from "@customTypes/index";

import styles from "./Product.module.scss";
import { CustomLink, Text, TextSizeEnum } from "@components/UI/Text";

interface IProps {
  product: IProduct;
  index?: number;
}

export const ProductComponent: React.FC<IProps> = ({ product, index }) => {
  const productClassName = classNames(styles.product);
  console.log(product);
  return (
    <div className={productClassName}>
      <Image
        src={product.image}
        width={100}
        height={100}
        alt='productImg'
        className={styles.productImg}
        priority={index === 0}
      />
      <CustomLink
        href={`products/${product.id}`}
        size={TextSizeEnum.S16}
        style={{ textAlign: "center" }}
      >
        {product.title}
      </CustomLink>
      <Text size={TextSizeEnum.S14}>Rating: {product.rating.rate}/5</Text>
      <Text size={TextSizeEnum.S16}>{product.price}$</Text>
    </div>
  );
};

ProductComponent.displayName = "Product";
