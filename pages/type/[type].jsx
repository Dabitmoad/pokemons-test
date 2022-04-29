import React from "react";
import axios from "axios";
import styles from "../../styles/globals.module.css";
import { PokemonCard } from "../../components/pokemonCard/index";

const Type = ({ listtype }) => {
  return (
    <div className={styles.container}>
      {listtype !== "err" &&
        listtype?.slice(0, 20)?.map((p, index) => {
          return (
            <PokemonCard
              key={index}
              name={p.pokemon.name}
              image={p.pokemon.url}
            />
          );
        })}

      {listtype?.length === 0 && filter && (
        <div className={styles.noPokemone}>No pokemon found :(</div>
      )}
      {listtype === null && <div className="loader"></div>}
      {listtype === "err" && <h1>ops something wrong :(</h1>}
    </div>
  );
};
export async function getServerSideProps(context) {
  const { type } = context.query;
  const resp = axios
    .get(`https://pokeapi.co/api/v2/type/${type}s/`)
    .then((response) => response.data.pokemon)
    .catch((err) => "err");

  return {
    props: {
      listtype: resp ? await resp : null,
    },
  };
}
export default Type;
