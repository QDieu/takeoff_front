import React from "react";
import { LoginBlock } from "../../organisms";
import { LoginTemplate } from "../../templates";

type TProps = {
  onSubmitAuth: (data: { [key: string]: string }) => void;
};

export const LoginPage: React.FC<TProps> = ({ onSubmitAuth }) => {
  return <LoginTemplate content={<LoginBlock onSubmitAuth={onSubmitAuth} />} />;
};
