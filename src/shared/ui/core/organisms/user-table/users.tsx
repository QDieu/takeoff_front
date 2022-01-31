import React from "react";
import styled from "styled-components";
import { UserAddModel } from "..";
import { TUser } from "../../../../types/User";
import { UserSearchInput } from "../../atoms";
import { UserTable } from "../../molecules";

const Wrapper = styled.div`
  width: 60%;
`;

const HeaderTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 8px;
`;

const Button = styled.div`
  background-color: #05bb2c;
  padding: 8px;
  border-radius: 5px;

  color: #fff;
  cursor: pointer;

  height: 30px;
`;

const Footer = styled.div`
  text-align: right;
`;

type TProps = {
  users: Array<TUser>;
  onClickInfo: (user: TUser) => void;
  onSubmitAddUserForm: (data: { [key: string]: string }) => void;
  onChangeText: (text: string) => void;
  clearValue: () => void;
  value: string;
};

export const Users: React.FC<TProps> = ({
  users,
  onClickInfo,
  onSubmitAddUserForm,
  clearValue,
  onChangeText,
  value,
}) => {
  const [activeModal, setActiveModal] = React.useState(false);

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Список пользователей</HeaderTitle>
        <UserSearchInput
          clearValue={clearValue}
          onChangeText={onChangeText}
          value={value}
        />
        <Button onClick={() => setActiveModal(true)}>
          Добавить пользователя
        </Button>
      </Header>
      <UserTable users={users} onClickInfo={onClickInfo} />
      <Footer>{`Найдено ${users.length} пользователей`}</Footer>
      <UserAddModel
        active={activeModal}
        setActive={setActiveModal}
        onSubmitAddUserForm={onSubmitAddUserForm}
      />
    </Wrapper>
  );
};
