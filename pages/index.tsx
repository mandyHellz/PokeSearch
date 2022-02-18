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
        <div className="-mt-20 whitespace-nowrap">
          <div className="w-full mx-auto">
            <img src="/img/pokemon-banner-03.jpeg" alt="" className="w-full" />
          </div>

          <div className="md:relative md:-top-1/3 xl:-top-1/2 md:left-44 lg:left-60 xl:left-1/4 bg-white mx-auto px-2 w-full md:w-1/2 xl:w-1/3 rounded-md border border-gray-200">
            {/* <div className="mx-auto text-center p-5">
              <p className="border-b py-2">Cadastre-se:</p>
              <div className="my-10">
                <Access />
              </div>
            </div> */}

            <GetPokemon marginBottom={10} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
