import axios from "axios";
import { IProduct } from "@customTypes/index";

export const getAllProductsData = async () => {
  const data = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);

  return data;
};

export const getAllProductsIds = async () => {
  const productsArray = await getAllProductsData();
  return productsArray.map((product: IProduct) => {
    return {
      params: {
        id: String(product.id),
      },
    };
  });
};

export const getProductData = async (id: string) => {
  const data = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.data);

  return data;
};
