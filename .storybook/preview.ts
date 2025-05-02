import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			// Optional selector to inspect
			element: "body",
			config: {
				rules: [
					{
						// The autocomplete rule will not run based on the CSS selector provided
						id: "autocomplete-valid",
						selector: '*:not([autocomplete="nope"])',
					},
					{
						// Setting the enabled option to false will disable checks for this particular rule on all stories.
						id: "image-alt",
						enabled: false,
					},
				],
			},
			/*
			 * Axe's options parameter
			 * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
			 * to learn more about the available options.
			 */
			options: {},
		},
	},
};

export default preview;
