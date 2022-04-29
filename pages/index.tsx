import Head from "next/head";
import styles from "../styles/globals.module.css";
import { usePokemon } from "../store/store";
import { PokemonCard } from "../components/pokemonCard";
import axios from "axios";

const Home = () => {
  const { pokemon, filter, setFilter } = usePokemon();
  return (
    <div className={styles.main}>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <input
          type="text"
          value={filter}
          placeholder="Search for your Pokemon"
          onChange={(e) => setFilter(e.target.value)}
          className={styles.search}
        />
      </div>
      <div className={styles.container}>
        {pokemon?.slice(0, 20).map((p, index) => {
          return <PokemonCard key={index} name={p.name} image={p.url} />;
        })}

        {pokemon?.length === 0 && filter && (
          <div className={styles.noPokemone}>No pokemon found :(</div>
        )}
        {pokemon === null && <div className="loader"></div>}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const resp = axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.data.results)
    .catch((err) => err.message);
  return {
    props: {
      pokemon: await resp,
    },
  };
}

export default Home;
