export type TInitialState = {
  accessToken: string;
  isSetFromLocalStorage: boolean;
  loading: boolean;
  success: boolean;
  userData: {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
      [key: string]: string;
    };
    address: {
      city: string;
      street: string;
      number: number;
      zipcode: string;
      geolocation: {
        [key: string]: string;
      };
    };
    phone: string;
  };
};
