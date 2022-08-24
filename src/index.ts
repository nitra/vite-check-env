import { loadEnv, type Plugin } from "vite";

/**
 * Plugins that check whether listed environment variable names are present in `process.env`
 *
 * @param requiredVariables array of variable names to be checked.
 * @returns vite-require-environment-variable plugin.
 */
export function requireEnvVar(requiredVariables: string[]): Plugin {
  return {
    name: "vite-require-env-var",
    enforce: "pre",
    config: (_, { mode }) => {
      const vars = loadEnv(mode, process.cwd(), "");

      const missingVariables = requiredVariables.reduce<string[]>(
        (errors, current) => {
          if (!(current in vars)) {
            errors.push(current);
          }

          return errors;
        },
        []
      );

      if (missingVariables.length === 0) {
        return;
      }

      missingVariables.forEach((current) => {
        console.log(`\nMissing environment variable: ${current}`);
      });

      if (mode !== "development") {
        process.exit(1);
      }
    },
  };
}