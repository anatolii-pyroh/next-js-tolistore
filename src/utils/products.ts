import axios from "axios";
import { IProduct } from "./types";

export const getAllProducts = async () => {
  const data: IProduct[] = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);
  return data;
};
