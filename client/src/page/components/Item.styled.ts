import styled from 'styled-components';

interface ItemDotInterface {
	top: number | string;
	left: number | string;
}

export const Thumb = styled.figure`
	display: block;
	margin: 0;
	position: relative;
`;

export const ItemDot = styled.span<ItemDotInterface>(
	({ top, left }) => `
    top:${top}px;
    left:${left}px;
    position: absolute;
	width: 20px;
	height: 20px;
	border-radius: 20px;
	background: #f00;
    cursor:pointer;
`
);
