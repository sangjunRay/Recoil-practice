import styled from 'styled-components';

interface IFont {
	fontSize: string;
	fontWeight: string;
	fontColor?: string;
	marginRight?: string;
	marginBottom?: string;
}

export const Font = styled.p<IFont>`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.theme.color};
	margin-right: ${(props) => props.marginRight};
	margin-bottom: ${(props) => props.marginBottom};
`;
