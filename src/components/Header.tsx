import React, {useContext } from 'react'
import styled from "styled-components";

import {ThemeContext} from '../contexts/ThemeContext';

import { ToggleSwitch } from "./ToggleSwitch";

interface HeaderProps {}

const Heading = styled.h1``;
const Paragraph = styled.p<{ scheme: string }>`color: ${props => props.scheme === 'dark' ? 'var(--color-dark-text)' : 'var(--color-light-text)'} `;

const ContainerText = styled.div`
	text-align: left;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Header: React.FC<HeaderProps> = () => {
	const handleChange = () => console.log("test");

	const { theme } = useContext(ThemeContext);

	return (
		<header className="App-header">
			<ContainerText>
				<Heading>Social Media Dashboard</Heading>
				<Paragraph scheme={theme}>Total Followers 23,004</Paragraph>
			</ContainerText>
			<Container>
				<ToggleSwitch toggled={false} handleChange={handleChange} />
			</Container>
		</header>
	);
};
