import { requireEnvVar } from '@nitra/vite-check-env'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [requireEnvVar(['VITE_TEST', 'VAR_2', 'VAR_3'])]
}
