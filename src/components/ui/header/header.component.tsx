import React from "react";
import styles from "./header.module.scss";

export const HeaderComponent = () => {
  const token =
    typeof localStorage !== "undefined" && localStorage.getItem("accessToken");
  return (
    <header className={styles.header}>
      {token ? "logged in" : "is not logged in"}
    </header>
  );
};

HeaderComponent.displayName = "Header";
