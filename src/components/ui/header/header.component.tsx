import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useAuthSelector } from "@reducers/auth/useAuthSelector";

export const HeaderComponent = () => {
  const { accessToken } = useAuthSelector();
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(accessToken));

  useEffect(() => {
    setIsLoggedIn(Boolean(accessToken));
  }, [accessToken]);

  return (
    <header className={"bg-light-primary p-4 px-20"}>
      {isLoggedIn ? (
        "Welcome, user!"
      ) : (
        <Link href='/login'>
          <button
            className={`
            bg-white text-light-primary p-1.5 rounded
            hover:bg-light-primary hover:text-white border-2 border-solid`}
          >
            Login
          </button>
        </Link>
      )}
    </header>
  );
};

HeaderComponent.displayName = "Header";
