import clsx from "clsx";
import styles from "./product.module.scss";

import { IProduct } from "@customTypes/index";
import Image from "next/image";

interface IProps {
  product: IProduct;
  index: number;
}

export const ProductComponent: React.FC<IProps> = ({ product, index }) => {
  //   console.log(product);
  const productClassName = clsx(styles.product);
  return (
    <div className={productClassName}>
      <Image
        src={product.image}
        width={140}
        height={140}
        alt='productImg'
        priority={index === 0 ? true : false}
      />
    </div>
  );
};

ProductComponent.displayName = "Product";
