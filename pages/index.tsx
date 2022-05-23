import type { NextPage } from "next";
import Head from "next/head";
import GetPokemon from "../components/GetPokemon/GetPokemon";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PokeSearch</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <DefaultLayout>
        <div className="max-w-page min-w-xs mx-auto">
          <div className="w-full mx-auto my-10">
            <GetPokemon marginBottom="10" />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
