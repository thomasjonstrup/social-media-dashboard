import * as React from "react";

import Twitter from "../images/icon-twitter.svg";
import Youtube from "../images/icon-youtube.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Up from "../images/icon-up.svg";
import Down from "../images/icon-down.svg";

import styled from "styled-components";

interface IconProps {
	name: string;
}

export const Icon: React.FC<IconProps> = ({
	name,
}) => {

	const getIcon = () => {
		switch(name) {
			case 'youtube':
				return Youtube
			case 'facebook':
				return Facebook
			case 'instagram':
				return Instagram
			case 'twitter':
				return Twitter
			case 'up':
				return Up
			case 'down':
				return Down

			default:
				return '';
		}
	}

	const element = getIcon();

 	return (
		  <img src={element} alt={name} />
	);
};
