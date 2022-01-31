import React from "react";
import styled from "styled-components";
import { Icons } from "../../../icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  border: 2px solid #5b6ad0;
  border-radius: 10px;
  width: 30%;
`;

const LeftSide = styled.div`
  width: 100%;
  display: flex;
`;

const Loop = styled.div`
  padding-top: 4px;
`;

const RightSide = styled.div`
  padding-top: 4px;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;
`;

const InputWrapper = styled.input`
  margin-left: 8px;
  box-sizing: border-box;
  border: none;
  width: 80%;
  line-height: 24px;
  font-size: 22px;
  &:focus {
    outline: none;
  }
`;

type TProps = {
  onChangeText: (text: string) => void;
  clearValue: () => void;
  value: string;
};

export const UserSearchInput: React.FC<TProps> = ({
  onChangeText,
  value,
  clearValue,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(e.target.value);
  };

  return (
    <Wrapper>
      <LeftSide>
        <Loop>
          <Icons.Loop />
        </Loop>
        <InputWrapper value={value} onChange={onChangeHandler} />
      </LeftSide>
      <RightSide onClick={() => clearValue()}>
        <Icons.CrossDelete />
      </RightSide>
    </Wrapper>
  );
};
