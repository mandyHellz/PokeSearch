import React, { useEffect, useState } from "react";
import PokeData from "../PokeData/PokeData";
import api from "../../pages/api/api";
import SearchForm from "../Form/SearchForm";
import { setTimeout } from "timers";

export interface pokeProps {
  id: string;
  name: string;
  sprites: { other: { home: { front_default: string } } };
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  moves: [{ move: { name: string } }];
  stats: [{ base_stat: number; stat: { name: string } }];
}
export interface pokeAttributesProps {
  id: string;
  descriptions: [{ description: string; language: { name: string } }];
}

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
    await api
      .get(`/pokemon/` + query.trim())
      .then((response) => {
        setPokemon(response.data);
        setQueryID(response.data.id);
      })
      .catch((error) => {
        console.log("Ops! An error has occurred");
      });
  };

  const getAttribute = async () => {
    await api
      .get(`characteristic/${queryID}/`)
      .then((response) => setAttributes(response.data))
      .catch((error) => {
        console.log("Ops! An error in ID has occurred");
      });
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
        />
      )}
    </>
  );
};

export default GetPokemon;
