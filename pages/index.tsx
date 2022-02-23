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
        <div className="lg:mb-44 2xl:mb-0">
          <div className="-mt-20">
            <img
              src="/img/pokemon-banner-03.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:absolute top-28 mb-10 flex flex-col items-center lg:items-end">
            <div className="w-5/6 lg:w-1/2 2xl:w-1/3 mx-auto lg:mx-10 bg-white bg-opacity-50 rounded-md border border-gray-200">
              <GetPokemon />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
