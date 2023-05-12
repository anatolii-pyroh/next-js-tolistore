import { useState } from "react";

import { IProduct } from "@customTypes/index";

import { Product } from "@components/Product";
import { Input } from "@components/UI/Input";
import { SvgIcon, IconsEnum } from "@components/UI/SvgIcon";

import styles from "./HomePage.module.scss";
import { Modal } from "@components/UI/Modal";

type Props = {
  productsData: IProduct[];
};

export const HomePageComponent = ({ productsData }: Props) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <div className={styles.home}>
      <button type='button' onClick={() => setIsVisibleModal(true)}>
        open modal
      </button>
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
      <Modal
        isVisible={isVisibleModal}
        onClose={() => setIsVisibleModal(false)}
      >
        Modal window
      </Modal>
    </div>
  );
};

HomePageComponent.displayName = "HomePage";
