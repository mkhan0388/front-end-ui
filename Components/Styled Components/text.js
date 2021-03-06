import styled from "styled-components/native";
import { Text as rawText, TextInput as rawTextInput } from "react-native";
import { black, greenWhite } from "./colours";

const BlankText = styled(rawText)`
	box-sizing: border-box;
	display: block;
	// border: 1pt solid red;
	margin: 0;
	padding: 0;
	color: ${black};
`;

const TextInput = styled(rawTextInput)`
	borderBottomColor: ${black};
	borderBottomWidth: 2pt;
	margin: 8px;
	text-align: center;
`;

const Text = styled(BlankText)`
	margin-top: auto;
	margin-bottom: auto;
`;

const RedText = styled(Text)`
	color: red;
	font-size: 0.8em;
`;

const SmallText = styled(Text)`
	font-size: 0.6em;
`;

const HeaderText = styled(Text)`
	font-size: 1.6em;
`;

const TitleText = styled(Text)`
	margin: 8px 0 4px;
	font-family: serif;
`;

export { HeaderText, RedText, SmallText, Text, TextInput, TitleText };
