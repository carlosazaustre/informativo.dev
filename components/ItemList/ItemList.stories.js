import React from "react";
import { ItemList } from "./ItemList";

export default {
  title: "Components/ItemList",
  component: ItemList,
};

const Story = (args) => <ItemList {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  items: [
    {
      title: "Take your first steps with Rust",
      position: 1,
      url: "docs.microsoft.com",
      time: "2 hours ago",
      points: 3,
      author: "cazaustre",
      comments: 0,
    },
    {
      title: "Learn CSS by Google",
      position: 1,
      url: "web.dev",
      time: "3 hours ago",
      points: 15,
      author: "cazaustre",
      comments: 1,
    },
  ],
};
