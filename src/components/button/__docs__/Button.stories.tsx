import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "components/Button",
  component: Example,
  args: {
    text: "Hola mundo"
  }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    size: "small",
    onClick: () => console.log("Button"),
  },
};


export const Tertiary: Story = {
  args: {
    size: "small",
    onClick: () => window.alert("Hola mundo")
  }
}