<script lang="ts">
	import Stack27 from "./stack27/Stack27.svelte";
</script>

<div class="main">
	<h2>Magix Games</h2>

	<div class="magician" />

	<Stack27 />

	<a class="info" href="https://github.com/krizzdewizz/magix-games">Fork me on Github</a>
</div>

<style lang="scss">
	.main {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.magician {
		height: 120px;
		width: 200px;
		background-size: 100px;
		background-image: url("../assets/Leonard_Powers_transparent.png");
		background-position: -36px -16p;
		margin-top: -23px;
		background-position-x: 57px;
		background-repeat: no-repeat;
	}

	.info {
		margin-bottom: 20px;
		margin-top: 50px;
		font-size: small;
	}
</style>
