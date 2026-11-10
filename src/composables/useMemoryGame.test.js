import { describe, it, expect, vi } from 'vitest'
import { useMemoryGame } from './useMemoryGame'

const noShuffle = () => 0.999 // keeps Fisher-Yates order stable

function setup() {
  return useMemoryGame({ symbols: ['A', 'B'], random: noShuffle, mismatchDelay: 100 })
}
const idsOf = (game, symbol) => game.cards.value.filter((c) => c.symbol === symbol).map((c) => c.id)

describe('memory game', () => {
  it('matches two cards with the same symbol and keeps them open', () => {
    const game = setup()
    const [a1, a2] = idsOf(game, 'A')
    game.flip(a1)
    game.flip(a2)
    expect(game.moves.value).toBe(1)
    expect(game.cards.value.filter((c) => c.matched)).toHaveLength(2)
  })

  it('flips a mismatched pair back after the delay and locks input meanwhile', () => {
    vi.useFakeTimers()
    const game = setup()
    const [a] = idsOf(game, 'A')
    const [b] = idsOf(game, 'B')
    game.flip(a)
    game.flip(b)
    expect(game.locked.value).toBe(true)
    vi.advanceTimersByTime(100)
    expect(game.locked.value).toBe(false)
    expect(game.cards.value.some((c) => c.flipped)).toBe(false)
    vi.useRealTimers()
  })

  it('wins once every pair is matched', () => {
    const game = setup()
    idsOf(game, 'A').forEach(game.flip)
    expect(game.won.value).toBe(false)
    idsOf(game, 'B').forEach(game.flip)
    expect(game.won.value).toBe(true)
  })

  it('reset clears progress', () => {
    const game = setup()
    idsOf(game, 'A').forEach(game.flip)
    game.reset()
    expect(game.moves.value).toBe(0)
    expect(game.cards.value.every((c) => !c.flipped && !c.matched)).toBe(true)
  })
})
