import React from "react";
import axios from "axios";
import styles from "../../styles/globals.module.css";
import Link from "next/link";

const SinglePekemon = ({ singlePokemon }) => {
  return (
    <div style={{ width: "80%", margin: "90px auto" }}>
      {singlePokemon !== "err" && (
        <>
          <div className={styles.imageContainer}>
            <img
              alt={singlePokemon.name}
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${singlePokemon.order}.svg`}
            />
          </div>
          <h2>{singlePokemon.name}</h2>
          <h2>hieght : {singlePokemon.height}</h2>
          <h2>
            type :{" "}
            {singlePokemon?.types?.map((type) => {
              return (
                <>
                  <span>
                    <Link href={`/type/${type.type.name}`}>
                      {type.type.name}
                    </Link>
                  </span>
                  <span>,</span>
                </>
              );
            })}
          </h2>
          <h2>
            moves :{" "}
            {singlePokemon?.moves
              ?.slice(0, 10)
              .map((move) => move.move.name + ",")}
          </h2>
        </>
      )}

      {singlePokemon && singlePokemon === "err" && (
        <h1>Ops something wrong :)</h1>
      )}
    </div>
  );
};
export async function getServerSideProps(context) {
  const { name } = context.query;
  const resp = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((response) => response.data)
    .catch((err) => "err");

  return {
    props: {
      singlePokemon: resp ? await resp : null,
    },
  };
}
export default SinglePekemon;
