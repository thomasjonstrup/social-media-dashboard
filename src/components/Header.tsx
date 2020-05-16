import React, {useContext } from 'react'
import styled from "styled-components";

import {ThemeContext} from '../contexts/ThemeContext';

import { ToggleSwitch } from "./ToggleSwitch";

interface HeaderProps {}

const HeaderStyled = styled.header<{ scheme: string }>`
    /* min-height: 100vh; */
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-between;
	font-size: calc(10px + 2vmin);

	@media (max-width: 800px) {
		flex-direction: column;
		padding-bottom: 1rem;
		margin-bottom: 2rem;
		border-bottom: 2px solid ${props => props.scheme === 'dark' ? 'var(--color-dark-text)' : 'var(--color-light-text)'};
	}
`;

const Heading = styled.h1``;
const Paragraph = styled.p<{ scheme: string }>`color: ${props => props.scheme === 'dark' ? 'var(--color-dark-text)' : 'var(--color-light-text)'} `;

const ContainerText = styled.div`
	text-align: left;
`;

const ParagraphText = styled.p`
	padding-right: 0.5rem;
	font-weight: 700;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Header: React.FC<HeaderProps> = () => {
	const handleChange = () => console.log("test");

	const { theme } = useContext(ThemeContext);

	return (
		<HeaderStyled scheme={theme} className="App-header">
			<ContainerText>
				<Heading>Social Media Dashboard</Heading>
				<Paragraph scheme={theme}>Total Followers 23,004</Paragraph>
			</ContainerText>
			<Container>
				<ParagraphText>Dark Mode</ParagraphText>
				<ToggleSwitch toggled={false} handleChange={handleChange} />
			</Container>
		</HeaderStyled>
	);
};
