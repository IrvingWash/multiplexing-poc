import React, { useEffect, useState } from 'react';

export function App(): JSX.Element {
	const [name, setName] = useState<string | undefined>();

	const bc = new BroadcastChannel('main');

	bc.onmessage = (event: { data: string }): void => {
		setName(event.data);
	};

	useEffect(() => {
		getPokemonName();
	}, []);

	return (
		<>
			<p>I am a pokemon</p>
			<p>The name is { name ?? '...' }</p>
		</>
	);

	async function getPokemonName(): Promise<void> {
		navigator.locks.request('truth', async() => new Promise(async() => {
			const response = await fetch(`http://localhost:3000/${getRandomPokemonId()}`);
			const pokemon = await response.json();

			setName(pokemon.name);
			bc.postMessage(pokemon.name);
		}));
	}

	function getRandomPokemonId(): number | undefined {
		const pokemonIds = [1, 2, 3];

		return pokemonIds[Math.floor(Math.random() * pokemonIds.length)];
	}
}
