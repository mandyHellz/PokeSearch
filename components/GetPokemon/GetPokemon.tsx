import React, { useEffect, useState } from "react";
import PokeData from "../PokeData/PokeData";
import api from "../../pages/api/api";
import SearchForm from "../Form/SearchForm";
import {
  colorPaletteProps,
  pokeAttributesProps,
  pokeProps,
} from "../Typings/Typings";

const pokemonData = {
  id: "",
  name: "",
  sprites: {},
  types: [{}],
  weight: 0,
  height: 0,
  moves: [{}],
  stats: [{}],
} as pokeProps;

const attributesData = {
  id: "",
  descriptions: [{}],
} as pokeAttributesProps;

export const colorPalette = [
  { type: "psychic", color: "bg-type-psychic" },
  { type: "rock", color: "bg-type-rock" },
  { type: "ghost", color: "bg-type-ghost" },
  { type: "steel", color: "bg-type-steel" },
  { type: "water", color: "bg-type-water" },
  { type: "grass", color: "bg-type-grass" },
  { type: "ice", color: "bg-type-ice" },
  { type: "dark", color: "bg-type-dark" },
  { type: "fairy", color: "bg-type-fairy" },
  { type: "normal", color: "bg-type-normal" },
  { type: "fighting", color: "bg-type-fighting" },
  { type: "flying", color: "bg-type-flying" },
  { type: "poison", color: "bg-type-poison" },
  { type: "ground", color: "bg-type-ground" },
  { type: "bug", color: "bg-type-bug" },
  { type: "fire", color: "bg-type-fire" },
  { type: "electric", color: "bg-type-electric" },
  { type: "dragon", color: "bg-type-dragon" },
] as colorPaletteProps[];

const GetPokemon = ({
  marginBottom = "10",
}: {
  marginBottom?: "10" | "20";
}) => {
  //states
  const [pokemon, setPokemon] = useState(pokemonData);
  const [attributes, setAttributes] = useState(attributesData);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("charizard");
  const [queryID, setQueryID] = useState("6");
  const [color, setColor] = useState(colorPalette);

  //create useEffect
  useEffect(() => {
    getPokemon();
  }, [query]);

  useEffect(() => {
    getAttribute();
  }, [pokemon]);

  // API REQUEST METHODS
  // fetch method:
  //function getPokemon(url) {
  //  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  //  .then(response => response.json())
  //  .then(data => {setPokemons(data)})
  //  .catch(err => console.log(err))
  //}

  // async-await request method:
  // const getPokemon = async () => {
  //   const response = await fetch(
  //     "https://pokeapi.co/api/v2/pokemon/" + query.trim()
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setPokemon(data);
  // };
  // console.log(query);

  // axios request method:
  const getPokemon = async () => {
    try {
      const { data } = await api.get(`/pokemon/` + query.trim());
      setPokemon(data);
      setQueryID(data.id);
    } catch (error) {
      console.log("Ops! An error has occurred");
    }
  };

  const getAttribute = async () => {
    try {
      const { data } = await api.get(`characteristic/${queryID}/`);
      setAttributes(data);
    } catch (error) {
      console.log("Ops! An error has occurred");
    }
  };

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <SearchForm
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
        // btnText="Show me who is this"
      />

      {pokemon === null || undefined ? (
        "loading..."
      ) : (
        <PokeData
          key={pokemon.id}
          pokemon={pokemon}
          attributes={attributes}
          marginBottom={marginBottom}
          colorPalette={color}
        />
      )}
    </>
  );
};

export default GetPokemon;
