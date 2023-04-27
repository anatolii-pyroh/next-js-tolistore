import classNames from "classnames";
import styles from "./product.module.scss";

import { IProduct } from "@customTypes/index";
import Image from "next/image";
import Link from "next/link";

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
        className='h-fit max-h-28 w-auto'
        priority={index === 0}
      />
      <Link href={`products/${product.id}`}>{product.title}</Link>
    </div>
  );
};

ProductComponent.displayName = "Product";
