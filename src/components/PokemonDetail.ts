import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Progress,
  Tag,
} from "@chakra-ui/react";

type PokemonAbility = {
  ability: {
    name: string;
  };
};

type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type PokemonSprites = {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
};

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonDetailProps = {
  pokemon: {
    name: string;
    id: number;
    abilities: PokemonAbility[];
    stats: PokemonStat[];
    sprites: PokemonSprites;
    types: PokemonType[];
  } | null;
};

export default function PokemonDetail({ pokemon }: PokemonDetailProps) {
  if (!pokemon) {
    return <Text color="red.500">No Pokémon data available.</Text>;
  }

  return (
    <Flex
      width="400px"
      bg="green.200"
      borderRadius="md"
      boxShadow="md"
      p={6}
      flexDirection="column"
      alignItems="center"
    >
      <Heading as="h2" size="lg" color="white" mb={4}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Heading>
      <Box bg="green.300" p={4} borderRadius="full" mb={4}>
        <Image
          src={
            pokemon.sprites?.other["official-artwork"]?.front_default ||
            "default_image_url.jpg"
          }
          alt={pokemon.name}
          boxSize="100px"
        />
      </Box>

      <Heading as="h3" size="md" color="white" mb={2}>
        Abilities
      </Heading>
      <Stack spacing={2} mb={4}>
        {pokemon.abilities.map((ability) => (
          <Tag
            key={ability.ability.name}
            colorScheme="green"
            borderRadius="md"
            px={4}
            py={1}
          >
            {ability.ability.name.charAt(0).toUpperCase() +
              ability.ability.name.slice(1)}
          </Tag>
        ))}
      </Stack>

      <Heading as="h3" size="md" color="green.700" mb={2}>
        Base Stats
      </Heading>
      <Stack width="100%" spacing={2}>
        {pokemon.stats.map((stat) => (
          <Box key={stat.stat.name}>
            <Text fontWeight="bold" fontSize="sm" color="gray.600">
              {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}{" "}
              {stat.base_stat}
            </Text>
            <Progress value={stat.base_stat} max={100} colorScheme="green" />
          </Box>
        ))}
        <Box>
          <Text fontWeight="bold" fontSize="sm" color="gray.600">
            Total:{" "}
            {pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0)}
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
}
