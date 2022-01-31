import React from "react";
import styled from "styled-components";
import { TUser } from "../../../../types/User";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;

  padding: 10px;
  box-sizing: border-box;

  border-radius: 8px;
  background-color: #f3f3f3;
`;

const InfoRow = styled.div``;

const Description = styled.span`
  color: #a3a3a3;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;

const Details = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;

  margin-left: 7px;
`;

const LeftBlock = styled.div``;

const RightBlock = styled.div`
  margin-top: auto;
`;

const Button = styled.div`
  color: #4b51ef;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

type TProps = {
  user: TUser;
  onClickInfo: (user: TUser) => void;
};

export const UserRow: React.FC<TProps> = ({ user, onClickInfo }) => {
  const onClickHandler = (user: TUser) => {
    onClickInfo(user);
  };

  return (
    <Wrapper>
      <LeftBlock>
        <InfoRow>
          <Description>{`ФИО: `}</Description>
          <Details>{user.name}</Details>
        </InfoRow>
        <InfoRow>
          <Description>{`Город: `}</Description>
          <Details>{user.address.city}</Details>
        </InfoRow>
        <InfoRow>
          <Description>{`Компания: `}</Description>
          <Details>{user.company.name}</Details>
        </InfoRow>
      </LeftBlock>
      <RightBlock>
        <Button onClick={() => onClickHandler(user)}>Подробнее</Button>
      </RightBlock>
    </Wrapper>
  );
};
