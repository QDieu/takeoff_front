import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MainTabs } from "./main-tabs";

export default {
  title: "Molecules/MainTabs",
  component: MainTabs,
} as ComponentMeta<typeof MainTabs>;

const Template: ComponentStory<typeof MainTabs> = (args) => (
  <MainTabs {...args} />
);

export const Tabs = Template.bind({});
Tabs.args = {
  itemsCategory: [
    ["city", "по городу"],
    ["company", "по компании"],
  ],
  onClickCategory: () => {},
};
