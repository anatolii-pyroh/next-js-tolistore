import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";

import { useProfileSelector } from "@reducers/profile/useProfileSelector";
import { useProfileActions } from "@reducers/profile/useProfileActions";

import { CustomLink, Text, TextSizeEnum } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { ButtonVariantEnum } from "@components/UI/Button/Button.types";
import { IconsEnum, SvgIcon } from "@components/UI/SvgIcon";

import styles from "./Header.module.scss";
import Cookies from "js-cookie";

export const HeaderComponent = () => {
  const { accessToken, loading, userData } = useProfileSelector();
  const { changeAccessToken } = useProfileActions();
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(accessToken));
  const router = useRouter();

  const headerClassName = classNames(`${styles.header} container`);

  const handleLogoutClick = () => {
    changeAccessToken("");
    Cookies.remove("userId");
  };

  useEffect(() => {
    setIsLoggedIn(Boolean(accessToken));
  }, [accessToken]);

  return (
    <header className={headerClassName}>
      {loading ? null : (
        <>
          <CustomLink
            href='/'
            size={TextSizeEnum.S16}
            style={{
              color: "var(--white)",
              opacity: router.pathname !== "/" ? 1 : 0,
              pointerEvents: router.pathname !== "/" ? "all" : "none",
            }}
          >
            ← Back to home
          </CustomLink>
          {isLoggedIn ? (
            <>
              <div className={styles.usernameAndCart}>
                <Text size={TextSizeEnum.S18} textTransform='capitalize'>
                  welcome, {userData?.username}!
                </Text>
                <Link href='/cart'>
                  <SvgIcon src={IconsEnum.cart} />
                </Link>
              </div>
              <Button
                icon={IconsEnum.exit}
                iconPosition='right'
                variant={ButtonVariantEnum.primary}
                size='sm'
                onClick={handleLogoutClick}
                text='Logout'
              />
            </>
          ) : (
            <Button
              onClick={() => router.push("/login")}
              variant={ButtonVariantEnum.primary}
              size='sm'
              text='Login'
            />
          )}
        </>
      )}
    </header>
  );
};

HeaderComponent.displayName = "Header";
