import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { Platform } from "../hooks/useGames";
import {MdPhoneIphone } from 'react-icons/md'
import {SiNintendo } from 'react-icons/si'
import {BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
	platforms: Platform[];
}

const IconsMap:{ [key: string]:IconType}= {
    pc: FaWindows,
    playstation: FaPlaystation, 
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web : BsGlobe
}
const PlatformIconList = ({ platforms }: Props) => {
	return (
		<HStack marginY={2}>
			{platforms.map((platform) => (
                <Icon key={platform.id} as={ IconsMap[platform.slug]} color='gray.500'/>
			))}
		</HStack >
	);
};

export default PlatformIconList;
