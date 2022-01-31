import React from "react";
import styled from "styled-components";
import { TUser } from "../../../../types/User";
import { UserRow } from "../../atoms";

const Wrapper = styled.div``;

type TProps = {
  users: Array<TUser>;
  onClickInfo: (user: TUser) => void;
};

export const UserTable: React.FC<TProps> = ({ users, onClickInfo }) => {
  return (
    <Wrapper>
      {users.map((item) => (
        <UserRow user={item} onClickInfo={onClickInfo} />
      ))}
    </Wrapper>
  );
};
