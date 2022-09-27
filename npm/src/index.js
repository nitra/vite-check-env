import pc from 'picocolors'
import { loadEnv } from 'vite'

/**
 * Plugins that check whether listed environment variable names are present in `process.env`
 *
 * @param requiredVariables array of variable names to be checked.
 * @returns vite-require-environment-variable plugin.
 */
export function requireEnvVar(requiredVariables) {
  return {
    name: 'vite-require-env-var',
    enforce: 'pre',
    config: (_, { mode, command }) => {
      if (command !== 'build') {
        return
      }
      const vars = loadEnv(mode, process.cwd(), '')

      const missingVariables = requiredVariables.reduce((errors, current) => {
        if (!(current in vars)) {
          errors.push(current)
        }

        return errors
      }, [])

      if (missingVariables.length === 0) {
        return
      }

      console.log('')

      missingVariables.forEach(current => {
        console.log(pc.red(`> Missing environment variable: ${pc.bold(current)}`))
      })

      console.log('')

      if (mode !== 'development') {
        process.exit(1)
      }
    }
  }
}
