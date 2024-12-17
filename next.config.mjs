/** @type {import('next').NextConfig} */
import pkg from "next-remove-imports";
const { removeImports } = pkg;
const nextConfig = {
	images: {
		domains: ["lh3.googleusercontent.com", "bit.ly", "avatars.githubusercontent.com"],
	},
	reactStrictMode: true,
	removeImports: {
		test: ({ source }) => {
			return source.includes("react-icons");
		},
	},
};

export default nextConfig;
