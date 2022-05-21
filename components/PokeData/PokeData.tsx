import React, { useEffect, useState } from "react";
import {
  colorPaletteProps,
  pokeAttributesProps,
  pokeProps,
} from "../GetPokemon/GetPokemon";

const PokeData = ({
  pokemon,
  attributes,
  colorPalette,
  marginBottom = "10",
}: {
  pokemon: pokeProps;
  attributes: pokeAttributesProps;
  colorPalette: colorPaletteProps[];
  marginBottom?: "10" | "20";
}) => {
  const [bgType, setBgType] = useState<any>();

  useEffect(() => {
    if (pokemon?.types[0]?.type !== undefined) {
      const type = colorPalette.find((item) => {
        if (item.type === pokemon?.types[0]?.type?.name) {
          const colorPicked = item.color;
          setBgType(colorPicked);
        }
      });
    }

    console.log(bgType);
  }, [pokemon]);

  return (
    <>
      {pokemon && (
        <div className="bg-white w-full h-full sm:w-64 mx-auto">
          <div
            className={`${bgType} bg-opacity-90 text-center rounded-xl flex flex-col mx-auto mb-${marginBottom}`}
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
                  <li className={`text-center text-sm rounded-full w-20 p-1 `}>
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

              {pokemon.stats?.map((stat) => (
                <div className="w-full flex items-center text-left leading-5 text-xxs">
                  <p className="flex-1 capitalize">{stat.stat?.name}:</p>

                  <p className="w-10 text-center">{stat.base_stat}</p>

                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-1.5 bg-primary rounded-full overflow-hidden`}
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
