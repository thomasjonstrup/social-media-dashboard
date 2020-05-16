import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

import { ThemeContext } from "../contexts/ThemeContext";

const Span = styled.span<{ type: string }>`
	color: ${(props) =>
		props.type === "up" ? "var(--color-green)" : "var(--color-red)"};
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
`;

const Heading3 = styled.h3`margin: 0.5rem;`;

const CardInner = styled.div`
	display: grid;
	justify-content: space-between;
	grid-template-columns: auto auto;
	align-items: center;
`;

const CardContainer = styled.div<{ scheme: string; icon: string }>`
border-radius: 5px;
overflow: hidden;
//border-top: 5px solid var(--color-${(props) => props.icon});
background: ${(props) =>
	props.scheme === "dark"
		? "var(--color-dark-card-bg)"
		: "var(--color-light-card-bg)"};
//padding: .5rem;
padding: 1.2rem;

box-shadow: 0 3px 6px rgba(32,32,32,.1), 0 3px 6px rgba(32,32,32,.1);
  //padding: 20px;
`;

const CardFollowers = styled.h2`
	font-size: 2rem;
	margin: 0.5rem;
`;

interface CardOverviewProps {
	name: string;
	followers: string;
	today: string; //number
	icon: string;
	type: string;
}

export const CardOverview: React.FC<CardOverviewProps> = ({
	name,
	followers,
	today,
	icon,
	type,
}) => {
	const { theme } = useContext(ThemeContext);
	return (
		<CardContainer scheme={theme} icon={icon}>
			<CardInner>
				<Heading3>{name}</Heading3>
				<Icon name={icon} />
			</CardInner>
			<CardInner>
				<CardFollowers className="card__followers">
					{followers}
				</CardFollowers>
				<div className="card__today">
					<Span type={type}>
						<Icon name={type} /> {today}
					</Span>
				</div>
			</CardInner>
		</CardContainer>
	);
};
