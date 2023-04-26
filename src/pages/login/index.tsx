import React, { FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@hooks/index";
import { signInThunk } from "@reducers/auth/auth.thunk";
import { useAuthSelector } from "@reducers/auth/useAuthSelector";
import { useRouter } from "next/router";

const Login = () => {
  const [signInData, setSignInData] = useState({ username: "", password: "" });
  const { success } = useAuthSelector();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(signInThunk(signInData));
  };

  useEffect(() => {
    if (!success) return;
    router.push("/");
  }, [success]);
  return (
    <form onSubmit={handleSubmit} name='loginForm'>
      username: johnd <br /> password: m38rmF$
      <br /> <br />
      <input
        id='login-form-username'
        name='loginForm-username'
        type='text'
        value={signInData.username}
        onChange={(e) =>
          setSignInData((prev) => ({
            ...prev,
            username: e.target.value,
          }))
        }
        placeholder='Enter your username'
        autoComplete='username'
        required
      />
      <input
        id='login-form-password'
        name='loginForm-password'
        type='password'
        value={signInData.password}
        onChange={(e) =>
          setSignInData((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
        placeholder='Enter your password'
        autoComplete='current-password'
        required
      />
      <button type='submit'>Submit</button>
      <br />
      <br />
    </form>
  );
};

export default Login;
