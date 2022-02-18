import React, { useEffect, useState } from "react";
import PokeData from "../PokeData/PokeData";

const pokemonData = {
  id: "",
  name: "",
  abilities: [],
  sprites: { front_default: "" },
  types: [{}],
  weight: "",
};

const GetPokemon = ({ marginBottom }: { marginBottom?: number }) => {
  //create a state for the data received
  const [pokemon, setPokemon] = useState(pokemonData);

  //create searchbar state
  const [search, setSearch] = useState("");

  //create a query state
  const [query, setQuery] = useState("charizard");

  //create useEffect
  useEffect(() => {
    getPokemon();
  }, [query]);

  //promise that brings API results
  //function getPokemon(url) {
  //  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  //  .then(response => response.json())
  //  .then(data => {setPokemons(data)})
  //  .catch(err => console.log(err))
  //}

  const getPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + query.trim()
    );
    const data = await response.json();
    // console.log(data);
    setPokemon(data);
  };
  console.log(query);

  const updateSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <form
        className=" md:flex items-center justify-center text-center mx-auto mt-10 mb-20 py-2 "
        onSubmit={getSearch}
      >
        <input
          id="search-bar"
          className=" w-1/2 border-2 rounded-md outline-none trnsform hover:border-yellow-400 "
          type="text"
          required
          value={search}
          onChange={updateSearch}
        />

        <button
          id="submit-btn"
          className=" mt-2 md:mt-0 mx-2 rounded-md bg-yellow-400 py-1 px-2 text-white hover:bg-yellow-500 "
          type="submit"
        >
          Quem é este Pokemon?
        </button>
      </form>

      {pokemon === null ? (
        "loading..."
      ) : (
        <PokeData
          key={pokemon.id}
          pokeName={pokemon.name}
          abilities={pokemon.abilities}
          image={pokemon.sprites.front_default}
          weight={pokemon.weight}
          marginBottom={marginBottom}
        />
      )}
    </>
  );
};

export default GetPokemon;
