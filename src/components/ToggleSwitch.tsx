
import React, { useCallback, useContext } from "react";
import styled from 'styled-components';
import {ThemeContext} from '../contexts/ThemeContext';

const Checkbox = styled.input`
	appearance: none;
	width: 4rem;
	height: 2rem;
	border-radius: 2rem;
	//background-color: hsl(230, 22%, 74%);
	outline: 0;
	cursor: pointer;
	transition: background-color 0.09s ease-in-out;
	position: relative;

	background-image: linear-gradient(
		to right,
		hsl(210, 78%, 56%),
		hsl(146, 68%, 55%)
	);

	&:checked {
		&::after {
			left: 0;
			background-color: black;
		}
	}

	&::after {
		content: "";
		width: 2rem;
		height: 2rem;
		border-radius: 2rem;
		background-color: white;
		position: absolute;
		transform: scale(0.7);
		left: 2rem;
		transition: left 0.09s ease-in-out;
		box-shadow: 0 0.1rem rgba(0, 0, 0, 0.5);
	}
`;

interface ToggleSwitchProps {
	toggled: boolean,
	handleChange: Function
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
			toggled,
			handleChange,
		}) => {

		const { theme, setTheme } = useContext(ThemeContext);



			const handleSwitch = useCallback(() => {
				if (theme === 'light') {
					setTheme('dark');
				} else {
					setTheme('light');
				}
			}, [setTheme, theme]);

			return (
				<Checkbox
					type="checkbox"
					name="switch_1"
					className="toggle_switch"
					onChange={handleSwitch}
					checked={theme === 'dark'}
				/>
			);
		};