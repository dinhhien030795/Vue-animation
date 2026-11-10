<script setup>
import { useMemoryGame } from './composables/useMemoryGame'

const { cards, moves, won, score, flip, reset } = useMemoryGame()
</script>

<template>
  <main class="game">
    <h1>Vue Memory Match</h1>
    <p class="stats">Moves: <strong>{{ moves }}</strong></p>

    <TransitionGroup tag="div" name="deal" class="board" appear>
      <button
        v-for="(card, i) in cards"
        :key="card.id"
        class="card"
        :class="{ flipped: card.flipped || card.matched, matched: card.matched }"
        :style="{ '--i': i }"
        :aria-label="card.flipped || card.matched ? card.symbol : 'Hidden card'"
        @click="flip(card.id)"
      >
        <span class="face back">?</span>
        <span class="face front">{{ card.symbol }}</span>
      </button>
    </TransitionGroup>

    <Transition name="pop">
      <div v-if="won" class="overlay" role="dialog" aria-label="You won">
        <div class="dialog">
          <h2>🎉 You won!</h2>
          <p>{{ moves }} moves · score {{ score }}</p>
          <button class="btn" @click="reset">Play again</button>
        </div>
      </div>
    </Transition>

    <button v-if="!won" class="btn ghost" @click="reset">Restart</button>
  </main>
</template>
