import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useDisclosure,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedplatform: Platform |null;
}

const PlatformSelector = ({ onSelectPlatform, selectedplatform }: Props) => {
	const { data } = usePlatform();
	const { isOpen, onToggle } = useDisclosure();

	return (
		<div>
			<Menu isOpen={isOpen} onOpen={onToggle} onClose={onToggle}>
				<MenuButton
					as={Button}
					rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}>
					{selectedplatform?.name || 'Platforms'}
				</MenuButton>
				<MenuList>
					{data.map((platform) => (
						<MenuItem
							key={platform.id}
							onClick={() => {
								platform = platform;
								onSelectPlatform(platform);
							}}>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
};

export default PlatformSelector;
