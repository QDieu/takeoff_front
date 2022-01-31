import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProfileUserForm } from "./profile-user-form";

export default {
  title: "Atoms/ProfileUserForm",
  component: ProfileUserForm,
} as ComponentMeta<typeof ProfileUserForm>;

const Template: ComponentStory<typeof ProfileUserForm> = (args) => (
  <ProfileUserForm {...args} />
);

export const DetailsRow = Template.bind({});
DetailsRow.args = {
  user: {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  editMode: true,
};
