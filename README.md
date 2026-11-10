# Vue Memory Match 🎮

A memory-card game built with Vue 3 + Vite, showing off Vue animations & transitions
(`<TransitionGroup>` card dealing, 3D CSS flip, `<Transition>` win dialog).

Originally the files for the Net Ninja *Vue Animations & Transitions* tutorial.

## Play

```bash
npm install
npm run dev     # play locally
npm test        # game-logic tests (vitest)
npm run build
```

Game logic lives in `src/composables/useMemoryGame.js` (tested); UI in `src/App.vue`.

## Agent skills

`.claude/skills/` contains [Matt Pocock's skills](https://github.com/mattpocock/skills)
(engineering, productivity, misc; MIT license, see `LICENSE-mattpocock-skills`), e.g. `/tdd`, `/to-spec`, `/diagnosing-bugs`.
