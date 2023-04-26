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
    <header className={"bg-light-primary p-3 px-20"}>
      {isLoggedIn ? (
        "Welcome, user!"
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
    </header>
  );
};

HeaderComponent.displayName = "Header";
