import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginPage } from "./login-page";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage {...args} />
);

export const Login_Page = Template.bind({});
Login_Page.args = {};
