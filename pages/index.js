import React from "react";

export async function getStaticProps(context) {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    .then((respostaEmObjeto) => {
      // console.log(respostaEmObjeto.pokemon_entries);
      return respostaEmObjeto.pokemon_entries;
    });

  return {
    props: {
      pokemons,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { pokemons } = props;

  return (
    <div>
      Pokedex - Antony
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a>Sobre o projeto</a>
          </Link>
        </li>
      </ul>
      <ul>
        {pokemons.map((pokemom) => (
          <li key={pokemom.entry_number}>{pokemom.pokemon_species.name}</li>
        ))}
      </ul>
    </div>
  );
}
