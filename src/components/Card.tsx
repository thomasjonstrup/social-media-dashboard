import React, { useContext} from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

import { ThemeContext } from '../contexts/ThemeContext';

const Span = styled.span< { type: string } > `color: ${props => props.type === 'up' ? 'var(--color-green)' : 'var(--color-red)'}`;

const CardContainer = styled.div< { scheme: string } >`
border-radius: 5px;
border-top: 3px solid transparent;
background: ${props => props.scheme === 'dark' ? 'var(--color-dark-card-bg)' : 'var(--color-light-card-bg)'};
padding: .5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  //padding: 20px;
  min-height: 170px;
`;

interface CardProps {
	name: string;
	followers: string;
	today: string; //number
	icon: string;
	type: string;
}



export const Card: React.FC<CardProps> = ({
	name,
	followers,
	today,
	icon,
	type,
}) => {

	const { theme } = useContext(ThemeContext);
	return (
		<CardContainer scheme={theme}>
			<div className="card__title">
				<Icon name={icon} />
				<h3>{name}</h3>
			</div>
			<div className="card__followers">{followers}</div>
			<div className="card__today"> <Span type={type}> <Icon name={type} /> {today}</Span></div>
		</CardContainer>
	);
};
