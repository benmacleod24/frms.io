import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
	variants: {
		brand: {
			bg: "brand.700",
			fontWeight: "semibold",
			_hover: {
				bg: "brand.800",
			},
			border: "1px solid",
			borderColor: "whiteAlpha.200",
		},
		simple: {
			fontWeight: "normal",
			_hover: {
				color: "whiteAlpha.700",
			},
		},
	},
});
