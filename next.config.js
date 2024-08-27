const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// appDir: true,
		swcMinify: true,
	},

	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
