import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 5px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #4b51ef;
  &:hover {
    cursor: pointer;
  }
  display: inline-block;
`;

const TextWrapper = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-family: "Roboto";
  color: #fff;
`;

type TProps = {
  item: string[];
  onClickCategory: (value: string) => void;
};

export const Tab: React.FC<TProps> = ({ item, onClickCategory }) => {
  const onClickHandler = () => {
    onClickCategory(item[0]);
  };

  return (
    <Wrapper>
      <ContentWrapper onClick={onClickHandler}>
        <TextWrapper>{item[1]}</TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
