import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "@hooks/index";
import { signInThunk } from "@reducers/auth/auth.thunk";
import { useAuthSelector } from "@reducers/auth/useAuthSelector";

const Login = () => {
  const [signInData, setSignInData] = useState({ username: "", password: "" });
  const { success } = useAuthSelector();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(signInThunk(signInData));
  };

  return (
    <form onSubmit={handleSubmit}>
      username: mor_2314, password: 83r5^_
      <input
        name='username'
        type='text'
        value={signInData.username}
        onChange={(e) =>
          setSignInData((prev) => ({
            ...prev,
            username: e.target.value,
          }))
        }
        placeholder='Enter your username'
        required
      />
      <input
        name='password'
        type='password'
        value={signInData.password}
        onChange={(e) =>
          setSignInData((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
        placeholder='Enter your password'
        required
      />
      <button type='submit'>Submit</button>
      {success && "logged in!"}
    </form>
  );
};

export default Login;
