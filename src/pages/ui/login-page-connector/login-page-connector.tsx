import React from "react";
import { useDispatch } from "react-redux";
import { ActionAuthReducer } from "../../../features/redux/auth-reducer";
import { LoginPage } from "../../../shared/ui/core/pages";

export const LoginPageConnector: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();

  const onSubmitAuth = (data: { [key: string]: string }) => {
    dispatch(ActionAuthReducer.checkAuth(data.login, data.password));
  };

  return <LoginPage onSubmitAuth={onSubmitAuth} />;
};
