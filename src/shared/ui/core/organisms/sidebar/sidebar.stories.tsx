import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sidebar } from "./sidebar";

export default {
  title: "Organisms/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Tabs = Template.bind({});
Tabs.args = {
  itemsCategory: [
    ["city", "по городу"],
    ["company", "по компании"],
  ],
  onClickCategory: () => {},
};
