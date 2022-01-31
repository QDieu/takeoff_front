import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 16px;
`;

const TextWrapper = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const Button = styled.div`
  padding: 6px 11px;

  background-color: #4b51ef;
  border-radius: 5px;
  display: inline-block;

  color: #fff;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
`;

type TProps = {
  onToggleEditMode: () => void;
};

export const ProfileUserHead: React.FC<TProps> = ({ onToggleEditMode }) => {
  const onClickHandler = () => {
    onToggleEditMode();
  };
  return (
    <Wrapper>
      <TextWrapper>Профиль пользователя</TextWrapper>
      <Button onClick={onClickHandler}>Редактировать</Button>
    </Wrapper>
  );
};
