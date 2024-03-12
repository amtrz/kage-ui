import type { Preview } from "@storybook/react";

import "../src/globals.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
	parameters: {
		backgrounds: {
			disable: true,
		},
		layout: "centered",
		controls: {
			matchers: {
				withThemeByDataAttribute: true,
			},
		},
	},
	decorators: [
		withThemeByDataAttribute({
			themes: {
				light: "light",
				dark: "dark",
			},
			attributeName: "data-mode",
			defaultTheme: "light",
		}),
	],
};

export default preview;
