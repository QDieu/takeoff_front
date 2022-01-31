import React from "react";
import styled from "styled-components";
import { Tab } from "../../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type TProps = {
  itemsCategory: string[][];
  onClickCategory: (value: string) => void;
};

export const MainTabs: React.FC<TProps> = ({
  itemsCategory,
  onClickCategory,
}) => {
  return (
    <Wrapper>
      {itemsCategory.map((item) => (
        <Tab item={item} onClickCategory={onClickCategory} />
      ))}
    </Wrapper>
  );
};
