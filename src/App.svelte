<script>
	import Navbar from "./components/Navbar.svelte";

	let hexaString = ["1", "e", "9", "0", "f", "f"];

	function randomHexa() {
		let hexa = [
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
		];
		let item = hexa[Math.floor(Math.random() * hexa.length)];
		return item;
	}

	function randomColor() {
		for (let i = 0; i < hexaString.length; i++) {
			hexaString[i] = randomHexa();
		}
	}

	$: color = "#" + hexaString.join("");
</script>

<main>
	<Navbar />
	<section style={`background: ${color}`}>
		<div>
			<p>background-color: {color}</p>
		</div>
		<button on:click={randomColor}> Click me </button>
	</section>
</main>

<style>
	:root {
		--btn-bg: #111827;
	}
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
	}

	section {
		width: 100%;
		height: 100%;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	section div {
		background: var(--btn-bg);
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 0.25rem;
	}

	section div p {
		font-family: monospace;
		font-size: 2rem;
		font-weight: 800;
		color: white;
	}

	section button {
		padding: 1rem;
		box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.25);
		border-radius: 0.25rem;
		background: var(--btn-bg);
		cursor: pointer;
		transition: 250ms;
		border: none;
		outline: none;
		color: white;
		text-transform: uppercase;
		font-size: 1.125rem;
	}
</style>
