import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginBlock } from "./login-block";

export default {
  title: "Organisms/LoginBlock",
  component: LoginBlock,
} as ComponentMeta<typeof LoginBlock>;

const Template: ComponentStory<typeof LoginBlock> = (args) => (
  <LoginBlock {...args} />
);

export const loginBlock = Template.bind({});
loginBlock.args = {};
