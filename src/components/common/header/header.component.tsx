import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useProfileSelector } from "@reducers/profile/useProfileSelector";
import { useProfileActions } from "@reducers/profile/useProfileActions";

import { Text, TextSizeEnum } from "@components/UI/Text";

import styles from "./Header.module.scss";
import classNames from "classnames";
import { Button } from "@components/UI/Button";

export const HeaderComponent = () => {
  const { accessToken, loading, userData } = useProfileSelector();
  const { changeAccessToken } = useProfileActions();
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(accessToken));

  const headerClassName = classNames(`${styles.header} container`);

  const handleLogoutClick = () => {
    changeAccessToken("");
  };

  useEffect(() => {
    setIsLoggedIn(Boolean(accessToken));
  }, [accessToken]);

  return (
    <header
      className={headerClassName}
      style={{ justifyContent: isLoggedIn ? "space-between" : "flex-end" }}
    >
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {isLoggedIn ? (
            <>
              <Text size={TextSizeEnum.S18} textTransform='capitalize'>
                welcome, {userData?.username}!
              </Text>
              <Button onClick={handleLogoutClick} text='Logout' />
            </>
          ) : (
            <Link href='/login'>
              <button
                className={`rounded border-2 border-solid border-white bg-white p-1.5 
              text-light-primary hover:bg-light-primary hover:text-white`}
              >
                Login
              </button>
            </Link>
          )}
        </>
      )}
    </header>
  );
};

HeaderComponent.displayName = "Header";
