import { Flex, Grid, Button, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PokemonCard from "../components/PokemonCard";

type GetListPokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

type Pokemon = {
  name: string;
  url: string;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemons", page],
    queryFn: async () =>
      fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 16}&limit=16`
      ).then((res) => res.json() as Promise<GetListPokemonResponse>),
  });

  return (
    <Flex flexDirection="column">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} />
          ))
        )}
      </Grid>

      <Flex justifyContent="center" marginTop={5} gap={1}>
        <Button
          onClick={() => setPage(1)}
          colorScheme={page == 1 ? "purple" : "gray"}
        >
          1
        </Button>
        <Button
          onClick={() => setPage(2)}
          colorScheme={page == 2 ? "purple" : "gray"}
        >
          2
        </Button>
        <Button
          onClick={() => setPage(3)}
          colorScheme={page == 3 ? "purple" : "gray"}
        >
          3
        </Button>
      </Flex>
    </Flex>
  );
}
