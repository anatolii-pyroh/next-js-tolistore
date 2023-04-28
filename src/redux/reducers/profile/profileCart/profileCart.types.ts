export type TInitialState = {
  loading: boolean;
  success: boolean;
  cartData: TCurtProduct[];
  profileCartError: {
    status: boolean;
    message: string;
  };
};

export type TCurtProduct = {
  productId: number;
  quantity: number;
};
