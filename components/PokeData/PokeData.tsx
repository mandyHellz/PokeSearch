import React, { useEffect, useState } from "react";
import { pokeAttributesProps, pokeProps } from "../GetPokemon/GetPokemon";

const PokeData = ({
  pokemon,
  attributes,
  marginBottom = "10",
}: {
  pokemon: pokeProps;
  attributes: pokeAttributesProps;
  marginBottom?: "10" | "20";
}) => {
  const [bgType, setBgType] = useState("");

  useEffect(() => {
    if (pokemon?.types) {
      // const bgColorbyType = pokemon?.types?.map((item) => {
      //   if (item?.type?.name !== undefined) {
      //     return item?.type?.name;
      //   }
      // });
      if (pokemon?.types[0].type?.name !== undefined) {
        setBgType(`bg-type-${pokemon.types[0].type.name}`);
        console.log(pokemon.types[0].type.name);
      }
    }
  }, [pokemon, attributes]);

  useEffect(() => {
    // console.log(bgType[0]);
  }, [bgType]);

  console.log(bgType);

  return (
    <>
      {pokemon && (
        <div
          className={`${bgType} text-center rounded-xl w-full h-full sm:w-64 flex flex-col mx-auto mb-${marginBottom}`}
        >
          <p className="flex justify-center items-center gap-4 p-2 text-2xl font-bold text-white capitalize">
            {pokemon.name}
          </p>

          <div className="w-full flex justify-end px-5">
            <img className="w-36 -mt-10" src="/img/Pokeball.png" />
          </div>

          <div className="bg-white text-center rounded-xl w-11/12 sm:w-60 mx-auto px-1 pb-4 my-2">
            <img
              className="m-auto w-40 -mt-28"
              src={pokemon.sprites?.other?.home?.front_default}
              alt="pokemon"
            />

            <ul className="flex gap-4 pt-2 pb-4 justify-center items-center">
              {pokemon.types?.map((item) => (
                <li
                  className={`${bgType} text-center text-sm rounded-full w-20 p-1`}
                >
                  {item.type?.name}
                </li>
              ))}
            </ul>

            <div>
              <p className="m-auto text-center text-sm font-bold"> About </p>
              <div className="flex justify-around sm:justify-center items-center gap-4 sm:gap-2 text-xxs sm:text-xs">
                <div className="w-full flex justify-center items-center gap-0.5">
                  <img src="/img/Weight.png" />
                  <p>{pokemon.weight / 10} kgs</p>
                </div>
                <div className="w-full flex justify-center items-center gap-1 border-r border-l">
                  <img src="/img/Height.png" />
                  <p>{pokemon.height / 10} m</p>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <ul className="text-xxs">
                    {pokemon.moves
                      ?.map((item) => (
                        <li className="text-center">{item?.move?.name}</li>
                      ))
                      .slice(0, 2)}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full text-center text-base py-2">
              <p>
                {attributes?.descriptions?.map((item) => {
                  if (item?.language?.name === "en") {
                    return item?.description;
                  }
                })}
              </p>
            </div>

            <div className="w-full text-left text-xxs">
              {pokemon.stats?.map((stat) => (
                <div className="flex items-center gap-2">
                  <p className="flex-1 capitalize">{stat.stat?.name}:</p>

                  <p className="w-5">{stat.base_stat}</p>
                  <div className="flex-1 w-full h-1 bg-gray-200 rounded-full overflow-hidden overflow-x-hidden">
                    <div
                      className={`h-1 bg-primary transition duration-150 transition-width rounded-full`}
                      style={{ width: stat.base_stat }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeData;
