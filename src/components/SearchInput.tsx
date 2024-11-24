import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch></BsSearch>}>
      <Input borderRadius={20} placeholder="Search games..."></Input>
    </InputGroup>
  );
};

export default SearchInput;
