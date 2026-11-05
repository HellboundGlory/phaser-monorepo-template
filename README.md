# Phaser 4 games monorepo

A Bun monorepo for Phaser 4 browser games, with code shared between them in one package.

## Requirements

Bun 1.4 or newer.

## Layout

- `games/<name>` — one Vite app per game.
- `packages/shared` — code the games share.

## Commands

```
bun install
bun run test                          # default suite, under 30 s
bun run lint                          # oxlint
bun run format                        # oxfmt
bun run typecheck                     # tsc in every workspace
bun run --filter <game> build         # static build in games/<game>/dist
bun run --filter <game> dev           # dev server
```

## Adding a game

Copy `games/example` to `games/<name>`, rename it in its `package.json`, then run `bun install`.

## Licence

MIT. See `LICENSE`.
