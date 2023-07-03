import React, { FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@hooks/redux";

import { signInThunk } from "@reducers/auth/auth.thunk";
import { useAuthSelector } from "@reducers/auth/useAuthSelector";
import { useAuthActions } from "@reducers/auth/useAuthActions";

import { Input } from "@components/UI/Input";
import { Button } from "@components/UI/Button";
import { ButtonVariantEnum } from "@components/UI/Button/Button.types";
import { Loader } from "@components/Common/Loader";

import styles from "./LoginForm.module.scss";

export const LoginFormComponent = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const [signInData, setSignInData] = useState({ username: "", password: "" });
  const { success, loading } = useAuthSelector();
  const { resetSuccessState } = useAuthActions();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signInThunk(signInData));
  };

  useEffect(() => {
    if (!success) return;
    onSuccess();
    resetSuccessState();
  }, [success]);

  return (
    <div className={styles.loginPage}>
      username: johnd <br /> password: m38rmF$
      <form
        onSubmit={handleSubmit}
        name='loginForm'
        className={styles.loginPageForm}
      >
        <Input
          // className={`border-primary rounded border-2 border-solid p-1.5`}
          id='loginForm-username'
          type='text'
          value={signInData.username}
          onChange={(e) =>
            setSignInData((prev) => ({
              ...prev,
              username: e.target.value,
            }))
          }
          label='Username'
          placeholder='Enter your username'
          autoComplete='username'
          required
        />
        <Input
          // className={`border-primary rounded border-2 border-solid p-1.5`}
          id='loginForm-password'
          type='password'
          value={signInData.password}
          onChange={(e) =>
            setSignInData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          label='Password'
          placeholder='Enter your password'
          autoComplete='current-password'
          required
        />
        <Button
          type='submit'
          variant={ButtonVariantEnum.outlined}
          text='Submit'
          width='content'
          // className={`border-primary text-primary rounded border-2 border-solid p-1.5`}
        />
      </form>
      <Loader loading={loading} />
    </div>
  );
};

LoginFormComponent.displayName = "LoginForm";
