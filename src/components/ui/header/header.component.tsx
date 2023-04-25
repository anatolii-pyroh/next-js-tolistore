import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./header.module.scss";

import { useAuthSelector } from "@reducers/auth/useAuthSelector";

export const HeaderComponent = () => {
  const { accessToken } = useAuthSelector();
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(accessToken));

  useEffect(() => {
    setIsLoggedIn(Boolean(accessToken));
  }, [accessToken]);

  return (
    <header className={styles.header}>
      {isLoggedIn ? (
        "Welcome, user!"
      ) : (
        <Link href='/login'>
          <button>Log in</button>
        </Link>
      )}
    </header>
  );
};

HeaderComponent.displayName = "Header";
