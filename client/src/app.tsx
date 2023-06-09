import React, { useEffect, useState } from 'react';

export function App(): JSX.Element {
	const [name, setName] = useState<string | undefined>();

	const bc = new BroadcastChannel('pokemon');

	bc.onmessage = (event: { data: string }): void => {
		setName(event.data);
	};

	useEffect(() => {
		getPokemonName();
	}, []);

	return (
		<main>
			<p>I am a pokemon</p>
			<p>The name is { name ?? '...' }</p>
		</main>
	);

	async function getPokemonName(): Promise<void> {
		navigator.locks.request('pokemon-name', async() => new Promise(async() => {
			setInterval(async() => {
				const response = await fetch(`http://localhost:3000/${getRandomPokemonId()}`);
				const pokemon = await response.json();

				setName(pokemon.name);
				bc.postMessage(pokemon.name);
			}, 1000);
		}));
	}

	function getRandomPokemonId(): number | undefined {
		const pokemonIds = [1, 2, 3];

		return pokemonIds[Math.floor(Math.random() * pokemonIds.length)];
	}
}
