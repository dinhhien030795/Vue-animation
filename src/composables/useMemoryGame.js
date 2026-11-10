import { ref, computed } from 'vue'

export const SYMBOLS = ['🚀', '🌟', '🍕', '🎸', '🐙', '🔥', '🍀', '👾']

export function buildDeck(symbols = SYMBOLS, random = Math.random) {
  const cards = symbols.flatMap((symbol, i) => [
    { id: i * 2, symbol, flipped: false, matched: false },
    { id: i * 2 + 1, symbol, flipped: false, matched: false },
  ])
  // Fisher-Yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[cards[i], cards[j]] = [cards[j], cards[i]]
  }
  return cards
}

export function useMemoryGame({ symbols = SYMBOLS, random = Math.random, mismatchDelay = 800 } = {}) {
  const cards = ref(buildDeck(symbols, random))
  const moves = ref(0)
  const locked = ref(false)

  const won = computed(() => cards.value.every((c) => c.matched))
  const score = computed(() => Math.max(0, 1000 - (moves.value - symbols.length) * 50))

  function flip(id) {
    if (locked.value) return
    const card = cards.value.find((c) => c.id === id)
    if (!card || card.flipped || card.matched) return

    card.flipped = true
    const open = cards.value.filter((c) => c.flipped && !c.matched)
    if (open.length < 2) return

    moves.value++
    const [a, b] = open
    if (a.symbol === b.symbol) {
      a.matched = b.matched = true
      return
    }
    locked.value = true
    setTimeout(() => {
      a.flipped = b.flipped = false
      locked.value = false
    }, mismatchDelay)
  }

  function reset() {
    cards.value = buildDeck(symbols, random)
    moves.value = 0
    locked.value = false
  }

  return { cards, moves, won, score, locked, flip, reset }
}
