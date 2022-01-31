import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tab } from "./sidebar-tab";

export default {
  title: "Atoms/Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Users = Template.bind({});
Users.args = {
  item: ["city", "по городу"],
  onClickCategory: () => {},
};
