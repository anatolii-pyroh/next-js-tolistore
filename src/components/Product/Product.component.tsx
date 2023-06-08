import classNames from "classnames";
import Image from "next/image";

import { IProduct } from "@customTypes/index";

import { Text, TextSizeEnum } from "@components/UI/Text";
import { InfoHover } from "@components/UI/InfoHover";
import { StarsRating } from "@components/UI/StarsRating";

import styles from "./Product.module.scss";
import Link from "next/link";

type TProps = {
  product: IProduct;
  index?: number;
};

export const ProductComponent: React.FC<TProps> = ({ product }) => {
  const productClassName = classNames(styles.product, "myTransition");

  return (
    <Link className={productClassName} href={`products/${product.id}`}>
      <div className={styles.productCategory}>
        <InfoHover id={`product-description-${product.id}`}>
          {product.description}
        </InfoHover>
        <Text size={TextSizeEnum.S14}>{product.category}</Text>
      </div>

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
      <Text size={TextSizeEnum.S16} className={styles.productTitle}>
        {product.title}
      </Text>
      <div className={styles.ratingAndPrice}>
        <StarsRating
          rating={product.rating.rate}
          name={`productRating=${product.id}`}
        />
        <Text size={TextSizeEnum.S16}>{product.price.toFixed(2)}$</Text>
      </div>
    </Link>
  );
};

ProductComponent.displayName = "Product";
