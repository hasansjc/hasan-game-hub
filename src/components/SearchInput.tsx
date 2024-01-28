import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
	onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					if (ref.current) {
						onSearch(ref.current.value)
					}
				}}>
				<InputGroup>
					<InputLeftElement children={<BsSearch />} />
					<Input
						ref={ref}
						borderRadius={20}
						placeholder="Search a game..."
						width={800}
						variant="filled"
					/>
				</InputGroup>
			</form>
		</div>
	);
};

export default SearchInput;
