import { useState, useMemo, createContext, useContext } from "react";
interface Pokemon {
  name: string;
  url: string;
}

const usePokemonController = (pokemon: Pokemon[]) => {
  const [filter, setFilter] = useState("");

  const filteredPokemon = useMemo(
    () =>
      pokemon?.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, pokemon]
  );

  return {
    filter,
    setFilter,
    pokemon: filteredPokemon,
  };
};

const PokemonContext = createContext<ReturnType<typeof usePokemonController>>({
  filter: "",
  setFilter: () => {},
  pokemon: [],
});

export const PokemonProvider = ({ pokemon, children }) => (
  <PokemonContext.Provider value={usePokemonController(pokemon)}>
    {children}
  </PokemonContext.Provider>
);

export const usePokemon = () => useContext(PokemonContext);
