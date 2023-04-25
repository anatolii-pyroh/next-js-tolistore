import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

export const HeaderComponent = () => {
  const token =
    typeof localStorage !== "undefined" && localStorage.getItem("accessToken");
  return (
    <header className={styles.header}>
      {!token && (
        <Link href='/login'>
          <button>Log in</button>
        </Link>
      )}
    </header>
  );
};

HeaderComponent.displayName = "Header";
