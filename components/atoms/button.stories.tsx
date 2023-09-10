// import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./buttons";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

// export const Basic: Story = {};

export const primary1: Story = {
  render: () => <Button variant={"primary1"}>Mark as Paid</Button>,
};

export const primary2: Story = {
  render: () => <Button variant={"primary2"}>Save as Draft</Button>,
};

export const primary2_DarkMode: Story = {
  render: () => <Button variant={"primary2"}>Save as Draft</Button>,
};

export const secondary: Story = {
  render: () => <Button variant={"secondary"}>Save as Draft</Button>,
};

export const secondary_DarkMode: Story = {
  render: () => <Button variant={"secondary"}>Save as Draft</Button>,
};

export const Destructive: Story = {
  render: () => <Button variant={"destructive"}>Delete</Button>,
};
