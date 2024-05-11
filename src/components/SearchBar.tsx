import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../stores/GameQueryStore";

const SearchBar = () => {
  const navigate = useNavigate();
  const onSearchText = useGameQueryStore((s) => s.onSearchText);
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      onSearchText(inputRef.current.value);
      navigate("/");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={inputRef}
          borderRadius={20}
          variant="filled"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
