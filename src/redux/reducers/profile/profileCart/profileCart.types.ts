export type TInitialState = {
  loading: boolean;
  success: boolean;
  cartData: TCartProduct;
  profileCartError: {
    status: boolean;
    message: string;
  };
};

export type TCartProduct = {
  id: number;
  userId: number;
  date: string;
  products: TProduct[];
};

export type TProduct = {
  productId: number;
  quantity: number;
};
