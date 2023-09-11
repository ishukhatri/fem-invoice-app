// import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
};
export default meta;

type Story = StoryObj<typeof Text>;

// export const Basic: Story = {};

export const headingLarge: Story = {
  render: () => <Text variant={"headingLarge"} text="Street Address"></Text>,
};

export const headingMedium: Story = {
  render: () => <Text variant={"headingMedium"} text="Street Address"></Text>,
};

export const headingSmall: Story = {
  render: () => <Text variant={"headingSmall"} text="Street Address"></Text>,
};

export const headingSmall2: Story = {
  render: () => <Text variant={"headingSmall2"} text="Street Address"></Text>,
};

export const body1: Story = {
  render: () => <Text variant={"body1"} text="Street Address"></Text>,
};

export const body2: Story = {
  render: () => <Text variant={"body2"} text="Street Address"></Text>,
};
