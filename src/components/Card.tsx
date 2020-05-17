import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

import { ThemeContext } from "../contexts/ThemeContext";

const Paragraph = styled.p<{ scheme: string }>`color: ${props => props.scheme === 'dark' ? 'var(--color-dark-text)' : 'var(--color-light-text)'}; text-transform: uppercase;`;

const Span = styled.span<{ type: string }>`
	color: ${(props) =>
		props.type === "up" ? "var(--color-green)" : "var(--color-red)"};
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
`;

const CardInner = styled.div`
/* 	display: grid;
	justify-content: space-between;
	grid-template-columns: auto auto;
	align-items: center;
	padding: 0 4rem; */

	    justify-content: center;
    align-items: center;
    display: flex;
`;

const CardContainer = styled.div<{ scheme: string; icon: string }>`
border-radius: 5px;
overflow: hidden;
//border-top: 5px solid var(--color-${(props) => props.icon});
background: ${(props) =>
	props.scheme === "dark"
		? "var(--color-dark-card-bg)"
		: "var(--color-light-card-bg)"};
padding: 2rem 0;

box-shadow: 0 3px 6px rgba(32,32,32,.1), 0 3px 6px rgba(32,32,32,.1);

/*   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; */
  //padding: 20px;
  min-height: 170px;



  position: relative;

  	&::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		content: "";
		height: 5px;
		display: block;
		background: var(--color-${(props) => props.icon})
	}
`;

const CardFollowers = styled.h2`
	font-size: 2.5rem;
	margin: 0.2rem;
`;
const Span2 = styled.span`
	margin-right: 0.2rem;
`;
const Heading3 = styled.h3<{ scheme: string }>`
	color: ${props => props.scheme === 'dark' ? 'var(--color-dark-text)' : 'var(--color-light-text)'};
	font-size: 0.6rem;
`;

interface CardProps {
	name: string;
	followers: string;
	today: string; //number
	icon: string;
	type: string;
	title: string;
}

export const Card: React.FC<CardProps> = ({
	name,
	followers,
	today,
	icon,
	type,
	title
}) => {
	const { theme } = useContext(ThemeContext);
	return (
		<CardContainer scheme={theme} icon={icon}>
			<CardInner>
				<Span2><Icon name={icon} /></Span2>
				<Heading3 scheme={theme}>{name}</Heading3>
			</CardInner>
			<CardFollowers className="card__followers">
				{followers}
			</CardFollowers>
			<Paragraph scheme={theme}>{title}</Paragraph>
			<div className="card__today">
				<Span type={type}>
					<Icon name={type} />{' '} {`${today} Today`}
				</Span>
			</div>
		</CardContainer>
	);
};
