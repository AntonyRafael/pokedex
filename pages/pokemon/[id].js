import React from 'react';

export default function Pokemon({ pokemon }) {
    console.log(pokemon)
    return ( 
        <div>
            Id:{pokemon.id}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    )
}

export async function getStaticProps({params}) {
    console.log(params);
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      
      throw new Error("Deu problema !")
    })
    .then((respostaEmObjeto) => {
      return respostaEmObjeto;
    });
    return {
        props: {
            pokemon
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1',
                }
            },
            {
                params: {
                    id: '2',
                }
            },
            {
                params: {
                    id: '3',
                }
            },
        ],
        fallback: false,
    }
}