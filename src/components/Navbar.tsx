import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
	onSearch: (searchText: string) => void;
}
const Navbar = ({onSearch}: Props) => {
	return (
		<div>
			<HStack justifyContent="space-between" padding="10px">
				<Image src={logo} boxSize="60px" objectFit="contain" alt="Logo" />
				<SearchInput onSearch={onSearch}/>
				<ColorModeSwitch />
			</HStack>
		</div>
	);
};

export default Navbar;
