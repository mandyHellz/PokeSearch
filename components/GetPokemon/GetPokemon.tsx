import React, { useEffect, useState } from "react";
import PokeData from "../PokeData/PokeData";
import api from "../../pages/api/api";
import SearchForm from "../Form/SearchForm";

const pokemonData = {
  id: "",
  name: "",
  abilities: [],
  sprites: { front_default: "" },
  types: [],
  weight: "",
};

const GetPokemon = () => {
  //states
  const [pokemon, setPokemon] = useState(pokemonData);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("charizard");

  //create useEffect
  useEffect(() => {
    getPokemon();
  }, [query]);

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
  const getPokemon = () => {
    api
      .get(query.trim())
      .then((response) => setPokemon(response.data))
      .catch((error) => {
        console.log("Ops! An error has occurred");
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
          pokeName={pokemon.name}
          abilities={pokemon.abilities}
          image={pokemon.sprites.front_default}
          weight={pokemon.weight}
          types={pokemon.types}
          marginBottom={10}
        />
      )}
    </>
  );
};

export default GetPokemon;
