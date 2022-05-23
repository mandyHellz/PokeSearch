import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GetPokemon from "../components/GetPokemon/GetPokemon";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import Access from "../components/SignIn/access";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Learnings</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <DefaultLayout>
        <div className="">
          <GetPokemon marginBottom="10" />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
