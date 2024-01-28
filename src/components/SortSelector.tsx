import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useDisclosure,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedOrder : string
}
const sortOrders = [
	{ value: "", label: "Relevance" },
	{ value: "-added", label: "Date added" },
	{ value: "name", label: "Name" },
	{ value: "-released", label: "Release date" },
	{ value: "-metacritic", label: "Popularity" },
	{ value: "-rating", label: "Average rating" },
];
const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
    const { isOpen, onToggle } = useDisclosure();
    let currentSortOrder = sortOrders.find(order => order.value === selectedOrder);
	return (
		<div>
			<Menu isOpen={isOpen} onOpen={onToggle} onClose={onToggle}>
				<MenuButton
					as={Button}
					rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}>
                    Order by : {currentSortOrder?.label || 'Relevance'}
				</MenuButton> 
				<MenuList>
					{sortOrders.map((order) => (
						<MenuItem
							key={order.value}
							value={order.value}
							onClick={() => {
								onSelectSortOrder(order.value);
							}}>
							{order.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
};

export default SortSelector;
