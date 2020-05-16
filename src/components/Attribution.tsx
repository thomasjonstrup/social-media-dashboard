import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const AttributionElement = styled.div<{ scheme: string }>`
	padding-top: 2rem;
	color: ${(props) =>
		props.scheme === "dark"
			? "var(--color-dark-text)"
			: "var(--color-light-text)"};
`;
const Link = styled.a<{ scheme: string }>`
	color: ${(props) =>
		props.scheme === "dark"
			? "var(--color-dark-text)"
			: "var(--color-light-text)"};
`;

interface AttributionProps {}

export const Attribution: React.FC<AttributionProps> = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<AttributionElement scheme={theme}>
			Challenge by{" "}
			<Link
				scheme={theme}
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
				rel="noopener noreferrer"
			>
				Frontend Mentor
			</Link>
			. Coded by{" "}
			<Link scheme={theme} href="https://github.com/thomasjonstrup/">
				Thomas Jonstrup
			</Link>
			.
		</AttributionElement>
	);
};
