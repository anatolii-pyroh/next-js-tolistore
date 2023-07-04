import { PayloadAction } from "@reduxjs/toolkit";

export type TInitialState = {
  accessToken: string;
  isSetFromReducer: boolean;
  profileError: {
    status: boolean;
    message: string;
  };
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

export type UserData = {
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

// actions
export type ProfileChangeAccessTokenAction = PayloadAction<string>;
