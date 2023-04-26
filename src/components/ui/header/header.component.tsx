import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useAuthSelector } from "@reducers/auth/useAuthSelector";
import { useAuthActions } from "@reducers/auth/useAuthActions";

export const HeaderComponent = () => {
  const { accessToken, userData, loading } = useAuthSelector();
  const { changeAccessToken } = useAuthActions();
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(accessToken));

  const handleLogoutClick = () => {
    changeAccessToken("");
  };

  useEffect(() => {
    setIsLoggedIn(Boolean(accessToken));
  }, [accessToken]);

  return (
    <header
      className={`flex h-14 items-center ${
        isLoggedIn ? "justify-between" : "justify-end"
      }  bg-light-primary px-20 text-white`}
    >
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {isLoggedIn ? (
            <>
              Welcome, {userData?.username}!
              <button
                className={`rounded border-2 border-solid border-white bg-white p-1.5 
          text-light-primary hover:bg-light-primary hover:text-white`}
                onClick={handleLogoutClick}
              >
                Logout
              </button>
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
