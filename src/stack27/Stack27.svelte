<script lang="ts">
    import { newGame, turn } from "./stack27";

    let game = newGame();
    let selectedStack = -1;

    function selectStack(index: number) {
        selectedStack = index;
        setTimeout(() =>{
            selectedStack = -1;
            game = turn(game, index);
        }, 300);
    }

    function replay() {
        game = newGame();
    }
</script>

{#if game.pickedCard !== undefined}
    <div class="done">
        <div class="title round">You picked</div>
        <div class="card {'card' + game.pickedCard}" />

        <button class="replay" type="button" on:click={replay}>Replay</button>
    </div>
{:else}
    <div class="title">
        Pick a card once and tell the magician 3 times which column contains the
        card.
    </div>

    <div class="title round">Round {game.round + 1}</div>

    <div class="title small">
        Click on the column which contains your picked card
    </div>

    <div class="cards">
        {#each game.stacks as stack, stackIndex}
            <div class="stack" class:selected="{stackIndex === selectedStack}" on:click={() => selectStack(stackIndex)}>
                {#each stack as card}
                    <div class="card {'card' + card}" />
                {/each}
            </div>
        {/each}
    </div>
{/if}

<style lang="scss">
    .title {
        width: 200px;
        text-align: center;
        padding: 20px;
    }

    .round {
        font-size: larger;
        padding-bottom: 0;
    }

    .small {
        font-size: smaller;
    }

    .cards {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 20px;
    }

    .stack {
        border-radius: 2px;
        outline-offset: 5px;

        &.selected {
            outline: 5px solid darkmagenta;
        }
    }

    .card {
        margin-bottom: -50px;
        width: 80px;
        height: 120px;
        background-size: 80px 120px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .done {
        display: flex;
        flex-direction: column;
        align-items: center;

        .card {
            margin-top: 10px;
        }
    }

    .replay {
        margin: 20px;
        margin-top: 40px;
        font-size: large;
        padding: 10px;
        padding-right: 40px;
        padding-left: 40px;
    }

    .card0 {
        background-image: url("../assets/cards/10_of_clubs.png");
    }
    .card1 {
        background-image: url("../assets/cards/10_of_diamonds.png");
    }
    .card2 {
        background-image: url("../assets/cards/10_of_hearts.png");
    }
    .card3 {
        background-image: url("../assets/cards/10_of_spades.png");
    }
    .card4 {
        background-image: url("../assets/cards/8_of_diamonds.png");
    }
    .card5 {
        background-image: url("../assets/cards/8_of_hearts.png");
    }
    .card6 {
        background-image: url("../assets/cards/8_of_spades.png");
    }
    .card7 {
        background-image: url("../assets/cards/9_of_clubs.png");
    }
    .card8 {
        background-image: url("../assets/cards/9_of_diamonds.png");
    }
    .card9 {
        background-image: url("../assets/cards/9_of_hearts.png");
    }
    .card10 {
        background-image: url("../assets/cards/9_of_spades.png");
    }
    .card11 {
        background-image: url("../assets/cards/ace_of_clubs.png");
    }
    .card12 {
        background-image: url("../assets/cards/ace_of_diamonds.png");
    }
    .card13 {
        background-image: url("../assets/cards/ace_of_hearts.png");
    }
    .card14 {
        background-image: url("../assets/cards/ace_of_spades2.png");
    }
    .card15 {
        background-image: url("../assets/cards/jack_of_clubs2.png");
    }
    .card16 {
        background-image: url("../assets/cards/jack_of_diamonds2.png");
    }
    .card17 {
        background-image: url("../assets/cards/jack_of_hearts2.png");
    }
    .card18 {
        background-image: url("../assets/cards/jack_of_spades2.png");
    }
    .card19 {
        background-image: url("../assets/cards/king_of_clubs2.png");
    }
    .card20 {
        background-image: url("../assets/cards/king_of_diamonds2.png");
    }
    .card21 {
        background-image: url("../assets/cards/king_of_hearts2.png");
    }
    .card22 {
        background-image: url("../assets/cards/king_of_spades2.png");
    }
    .card23 {
        background-image: url("../assets/cards/queen_of_clubs2.png");
    }
    .card24 {
        background-image: url("../assets/cards/queen_of_diamonds2.png");
    }
    .card25 {
        background-image: url("../assets/cards/queen_of_hearts2.png");
    }
    .card26 {
        background-image: url("../assets/cards/queen_of_spades2.png");
    }
</style>
