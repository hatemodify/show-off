import styled from 'styled-components';

export const ItemList = styled.ul`
	display: grid;
	list-style: none;
	text-align: left;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 30px 20px;
	grid-auto-rows: minmax(100px, auto);
	margin: 0;
	padding: 0 20px;
`;

export const ItemThumb = styled.figure`
	overflow: hidden;
	margin: 0;
	img {
		width: 100%;
	}
`;

export const ItemTitle = styled.strong`
	display: block;
	font-size: 14px;
`;

export const ItemDesc = styled.p`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	color: #555;
	font-size: 14px;
	overflow: hidden;
`;

export const DetailLink = styled.a`
	display: block;
`;
