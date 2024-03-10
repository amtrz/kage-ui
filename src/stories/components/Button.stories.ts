import { Button } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
	title: "Design System/Components/Button",
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		variant: {
			control: "radio",
			options: ["filled", "borderless", "outlined"],
			description: "The style variant of the button",
		},
		size: {
			control: "radio",
			options: ["sm", "md", "lg"],
			description: "The size of the button",
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn(), variant: "filled", size: "md", children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Filled: Story = {
	args: {
		variant: "filled",
	},
};

export const Borderless: Story = {
	args: {
		variant: "borderless",
	},
};

export const Outline: Story = {
	args: {
		variant: "outlined",
	},
};