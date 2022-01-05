import styled from 'styled-components';

export const ItemList = styled.ul`
	list-style: none;
`;

export const ItemThumb = styled.figure`
	width: 240px;
	height: 180px;
	overflow: hidden;
	img {
		width: 100%;
	}
`;

export const ItemTitle = styled.strong`
	display: block;
	font-size: 14px;
`;
