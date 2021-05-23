import React from "react";
import { Item } from "./Item";

export default {
  title: "Components/Item",
  component: Item,
};

const Story = (args) => <Item {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  title: "Learn CSS by Google",
  position: 1,
  url: "web.dev",
  time: "3 hours ago",
  points: 15,
  author: "cazaustre",
  comments: 1,
};
