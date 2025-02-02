import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex gap={60} alignItems="flex-end" paddingBlock={6}>
      <Flex flexDirection="column">
        <Link to="/">
          <Heading as="h1">Pokedéx</Heading>
        </Link>
        <Text>
          Search for Pokémon by name or using the National Pokédex number
        </Text>
      </Flex>

      <Box flex={1}>
        <InputGroup size="lg">
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="What Pokémon are you looking for?" />
        </InputGroup>
      </Box>
    </Flex>
  );
}
