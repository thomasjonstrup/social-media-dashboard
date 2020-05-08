import * as React from 'react';

interface CardProps {
	name: string,
	followers: string,
	today: string //number
};

export const Card: React.FC<CardProps> = ({name, followers, today}) => {
	return (
		<div className="card">
			<div className="card__title">{name}</div>
	<div className="card__followers">{followers}</div>
	<div className="card__today">{today}</div>
		</div>
	)
}