import React from "react";
import { TUser } from "../../../../types/User";
import { Users } from "../../organisms";
import { UsersTemplate } from "../../templates";

type TProps = {
  users: Array<TUser>;
  onClickInfo: (user: TUser) => void;
  onSubmitAddUserForm: (data: { [key: string]: string }) => void;
  onChangeText: (text: string) => void;
  clearValue: () => void;
  value: string;
};

export const UsersPage: React.FC<TProps> = ({
  users,
  onClickInfo,
  onSubmitAddUserForm,
  clearValue,
  onChangeText,
  value,
}) => {
  return (
    <UsersTemplate
      content={
        <Users
          users={users}
          onClickInfo={onClickInfo}
          onSubmitAddUserForm={onSubmitAddUserForm}
          clearValue={clearValue}
          onChangeText={onChangeText}
          value={value}
        />
      }
    />
  );
};
