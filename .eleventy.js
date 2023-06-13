const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// Autres configurations

	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
