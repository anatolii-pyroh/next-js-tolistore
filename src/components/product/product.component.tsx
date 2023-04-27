import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import { IProduct } from "@customTypes/index";

import styles from "./product.module.scss";

interface IProps {
  product: IProduct;
  index?: number;
}

export const ProductComponent: React.FC<IProps> = ({ product, index }) => {
  const productClassName = classNames(styles.product);
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
      <Link href={`products/${product.id}`}>{product.title}</Link>
    </div>
  );
};

ProductComponent.displayName = "Product";
