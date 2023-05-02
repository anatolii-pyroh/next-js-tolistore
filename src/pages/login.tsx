import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAppDispatch } from "@hooks/index";

import { signInThunk } from "@reducers/auth/auth.thunk";
import { useAuthSelector } from "@reducers/auth/useAuthSelector";
import { useAuthActions } from "@reducers/auth/useAuthActions";

const Login = () => {
  const [signInData, setSignInData] = useState({ username: "", password: "" });
  const { success } = useAuthSelector();
  const { resetSuccessState } = useAuthActions();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(signInThunk(signInData));
  };

  useEffect(() => {
    if (!success) return;
    router.push("/");
    resetSuccessState();
  }, [success]);

  return (
    <form onSubmit={handleSubmit} name='loginForm'>
      username: johnd <br /> password: m38rmF$
      <br /> <br />
      <div className='flex gap-2'>
        <input
          className={`rounded border-2 border-solid border-primary p-1.5`}
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
          className={`rounded border-2 border-solid border-primary p-1.5`}
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
        <button
          type='submit'
          className={`rounded border-2 border-solid border-primary p-1.5 text-primary`}
        >
          Submit
        </button>
      </div>
      <br />
      <br />
    </form>
  );
};

export default Login;
