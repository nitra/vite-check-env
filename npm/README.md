# @nitra/vite-check-env

Vite.js plugin that makes build fail if a required environment variable(s) is missing.

It supports all .env.\* files (even combined)

- .env
- .env.local
- .env.[mode]

Example CLI output by @nitra/vite-check-env plugin:

```sh
> Missing environment variable: VITE_SENTRY1
```

## Install dependency

```sh
# npm
npm i -D @nitra/vite-check-env

# yarn
yarn add -D @nitra/vite-check-env

# pnpm
pnpm add -D @nitra/vite-check-env
```

## Add to Vite configuration file

```js
import { defineConfig } from "vite";
import { requireEnvVar } from "@nitra/vite-check-env";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [requireEnvVar(["VARIABLE_1", "VITE_URL"])]
})
```

```ts
import { defineConfig } from "vite";
import { requireEnvVar } from "@nitra/vite-check-env";

export default defineConfig({
  plugins: [requireEnvVar(["VARIABLE_1", "VITE_URL"])],
});
```
