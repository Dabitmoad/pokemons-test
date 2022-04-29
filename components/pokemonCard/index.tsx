import Link from "next/link";
import React from "react";
import styles from "../../styles/globals.module.css";

export const PokemonCard = (props) => {
  const { key, image, name } = props;

  const silce: Array<string> = image?.split("/");

  return (
    <div key={key} className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          alt={name}
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${silce[6]}.svg`}
        />
      </div>
      <Link href={`/singlePokemon/${name}`} passHref>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};
