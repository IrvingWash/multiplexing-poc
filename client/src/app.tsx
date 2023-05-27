import React, { useState } from 'react';

export function App(): JSX.Element {
	const [name, setName] = useState<string | undefined>();

	const bc = new BroadcastChannel('main');

	bc.onmessage = (event: { data: string }): void => {
		setName(event.data);
	};

	return (
		<>
			<p>I am a pokemon</p>
			<p>The name is { name ?? '...' }</p>
			<button onClick={ getName }>Ask for the name</button>
		</>
	);

	async function getName(): Promise<void> {
		await navigator.locks.request('truth', async() => {
			const response = await fetch(`http://localhost:3000/${getRandomPokemonId()}`);
			const pokemon = await response.json();

			setName(pokemon.name);
			bc.postMessage(pokemon.name);
		});
	}

	function getRandomPokemonId(): number | undefined {
		const pokemonIds = [1, 2, 3];

		return pokemonIds[Math.floor(Math.random() * pokemonIds.length)];
	}
}
