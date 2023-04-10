import { IProduct } from "@customTypes/index";
import axios from "axios";

export const getAllProducts = async () => {
  const data: IProduct[] = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);
  return data;
};
