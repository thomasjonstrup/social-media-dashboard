import {createGlobalStyle, css} from 'styled-components';

interface Props {
	theme: string;
}

export const GlobalStyles = createGlobalStyle(
			(props: Props) => css`
				:root {
					--color-dark-bg: hsl(230, 17%, 14%);
					--color-dark-bg-top: hsl(232, 19%, 15%);
					--color-dark-card-bg: hsl(228, 28%, 20%);
					--color-dark-text: hsl(228, 34%, 66%);
					--color-dark-textlight: hsl(0, 0%, 100%);

					--color-light-bg: hsl(0, 0%, 100%);
					--color-light-bg-top: hsl(225, 100%, 98%);
					--color-light-card-bg: hsl(227, 47%, 96%);
					--color-light-text: hsl(228, 12%, 44%);
					--color-light-textlight: hsl(230, 17%, 14%);
					--color-green: hsl(163, 72%, 41%);
					--color-red: hsl(356, 69%, 56%);
					--color-facebook: hsl(195, 100%, 50%);
					--color-twitter:  hsl(203, 89%, 53%);
					--color-instagram: linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%);
					--color-youtube: hsl(348, 97%, 39%);

					body {
						background-color: ${props.theme === "light"
							? "var(--color-light-bg)"
							: "var(--color-dark-bg)"};
						color: ${props.theme === "light"
							? "var(--color-light-textlight)"
							: "var(--color-dark-textlight)"};
						transition: background .6s linear;
					}
				}
			`
		);