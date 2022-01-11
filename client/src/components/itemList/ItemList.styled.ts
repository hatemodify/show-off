import styled from 'styled-components';

export const ItemList = styled.ul`
	list-style: none;
	display: grid;
	grid-template-rows: 100px 200px;
	column-gap: 20px;
`;

export const ItemThumb = styled.figure`
	overflow: hidden;
	img {
		width: 100%;
	}
`;

export const ItemTitle = styled.strong`
	display: block;
	font-size: 14px;
`;
