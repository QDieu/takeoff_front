import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserPageConnector } from "../user-page-connector";
import { SidebarConnector } from "../sidebar-connector";
import { UserProfilePageConnector } from "../user-profile-page-connector";
import { useSelector } from "react-redux";
import { TAppState } from "../../../features/redux/store";
import { LoginPageConnector } from "../login-page-connector";

export const AppNavigation = () => {
  const isAuth = useSelector((state: TAppState) => state.authPage.isAuth);

  return (
    <div>
      {isAuth ? (
        <>
          <SidebarConnector />
          <Routes>
            <Route path="/" element={<UserPageConnector />} />
            <Route path="/user" element={<UserProfilePageConnector />} />
          </Routes>
        </>
      ) : (
        <LoginPageConnector />
      )}
    </div>
  );
};
