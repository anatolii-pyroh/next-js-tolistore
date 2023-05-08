import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "..";
import { IconsEnum } from "@components/UI/SvgIcon";

import styles from "./SwitchThemeButton.module.scss";

export const SwitchThemeButtonComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <p>Current theme: {resolvedTheme}</p> */}
      <Button
        icon={resolvedTheme === "light" ? IconsEnum.moon : IconsEnum.sun}
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        className={styles.themeButton}
      />
    </>
  );
};

SwitchThemeButtonComponent.displayName = "SwitchThemeButton";
