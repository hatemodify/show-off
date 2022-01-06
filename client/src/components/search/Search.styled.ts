import styled from 'styled-components';

export const SearchWrap = styled.div`
	display: flex;
	width: 100%;
	height: 100px;
	justify-content: center;
	align-items: center;

	${(props) => (props.title ? 'border: 1px solid #e3e3e3;' : null)}
`;

export const InpSearch = styled.input`
	border: 1px solid #000;
	background: none;
	height: 40px;
	box-sizing: border-box;
`;

export const BtnSeach = styled.button`
	width: 50px;
	height: 40px;
	background: blue;
	border: none;
	color: #fff;
`;
