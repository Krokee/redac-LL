const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// Autres configurations

	// Copy srp/pics/*.png to dist/pics/*.png
	eleventyConfig.addPassthroughCopy("src/pics");

	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
