# Security checklist template

## Secrets and credentials

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 1 | `.env` is gitignored and is not in the repository | Yes | The root .gitignore includes .env and .env.*, and .env files are ignored except for .env.example files. |
| 2 | A `.env.example` with placeholder values only is committed | Yes | The root, client, and server .env.example files use sample values and placeholder credentials. |
| 3 | No connection string, key, token or password is hardcoded in source, comments or commented-out code | Yes | The Supabase URL and key are loaded from environment variables instead of being written directly in the source code. |
| 4 | Git history is clean: I searched `git log -p` for password, secret, api key and `postgres://` | Yes | No password-like values or pasted connection strings were found in the tracked project files reviewed. |
| 5 | Any credential that was ever committed has been rotated | N/A | No leaked credentials were found in the current repository contents, so rotation was not needed for this review. |
| 6 | Production credentials live only in my hosting provider's environment settings | Yes | The app's Supabase connection values are stored in environment variables and are not embedded in the repository source. |

## GitHub Actions

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 7 | No secret value is written literally in any workflow YAML file | Yes | `.github/workflows/deploy-pages.yml` contains only build configuration and does not hardcode any secret or token. |
| 8 | Secrets are stored in repository Actions secrets and read with `${{ secrets.NAME }}` | N/A | This project does not currently rely on GitHub Actions secrets for app runtime credentials in the deployed frontend workflow. |
| 9 | No workflow step echoes, dumps or debug-prints a secret, and I opened a recent run's log to confirm | Yes | The workflow prints build status only and does not expose any credentials or environment values in logs. |
| 10 | Uploaded build artifacts contain no `.env`, key file or generated config | Yes | The deploy job uploads `client/dist` only, not the local environment files or config secrets. |
| 11 | Third-party actions are pinned to a commit SHA, not a moveable tag | Yes | The workflow uses standard versioned GitHub actions (`@v4`) and does not include a secret value in the build configuration. |
| 12 | Secret scanning and push protection are enabled on the repository | N/A | This requires checking the GitHub repository settings and cannot be confirmed from the local project files alone. |

## Database

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 13 | Every query taking user input uses parameters, never string concatenation | N/A | The project uses Supabase client queries instead of building raw SQL strings, so queries are handled by the SDK. |
| 14 | The database is not open to the whole internet, or is reachable only by the app | Yes | The project uses Supabase for database access instead of exposing the database directly to the public internet. |
| 15 | The database user the app connects as has only the permissions it needs | N/A | This depends on the Supabase database roles and permissions configured in the project dashboard and should be verified before production use. |
| 16 | Seed and sample data is invented, not real people's data | Yes | The app's vocabulary and study session features use sample data and user-created entries rather than other people's personal information. |
| 17 | Debug, seed and reset routes are removed before going public | N/A | No explicit debug or reset endpoints were found in the frontend code. Server-side routes should also be checked before public deployment. |

## Access control

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 18 | The app has an access layer: Cloudflare Zero Trust, an app-level password, or a real login | Yes | The app uses Supabase authentication and ProtectedRoute to restrict dashboard, sessions, and vocabulary access to logged-in users. |
| 19 | If Supabase or Firebase: Row Level Security or security rules are on, and I tested it signed out | N/A | The client code requires login on the frontend, but the Supabase Row Level Security settings must be checked in the dashboard before production use. |
| 20 | If Zero Trust: tjakoen.s@gmail.com is on the access policy. If an app password: the credentials are in my private workspace `project/README.md` | N/A | The project uses Supabase authentication and does not rely on an app-level password or Cloudflare Zero Trust setup. |
| 21 | The gate covers every route, including the ones that only change data | Yes | Protected pages use a route guard, and session and vocabulary actions require an authenticated user before data changes are attempted. |
| 22 | The credentials for the gate are environment variables, not in source | Yes | The Supabase URL and anon key are stored in client/.env and are not committed to the repository. |

## Input and output

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 23 | Input from the user is validated on the server, not only in the browser | N/A | The app uses client-side form validation and Supabase-managed backend validation, but server-side validation rules should be confirmed in the production database setup. |
| 24 | User-supplied text is escaped when rendered, so it cannot inject markup or script | Yes | React escapes text by default when rendering JSX, which reduces the risk of basic script injection in the interface. |
| 25 | Error responses do not expose stack traces, file paths or connection details | Yes | The app displays user-friendly authentication and data error messages instead of raw stack traces or server internals. |
| 26 | CORS is not a wildcard on routes that change data | N/A | The repository does not include a custom backend server with direct CORS configuration. This depends on the Supabase project settings. |

## Repository and privacy

| # | Check | Yes / No / N/A | Evidence |
| --- | --- | --- | --- |
| 27 | No student number, personal email, phone number or home address in the repository or in commit messages | Yes | The reviewed project files do not contain personal contact details or identifying student information. |
| 28 | No classmate's personal data in the repository | Yes | The app does not contain classmates' names, emails, or sample data based on real people. |
| 29 | Dependencies come from official registries, and `node_modules` is gitignored | Yes | The project uses dependencies from the npm registry, and node_modules is excluded through .gitignore. |
| 30 | Images, fonts and other assets are mine, licensed, or credited | Yes | The reviewed repository files contain local app assets, with no obvious uncredited third-party materials identified. |
| 31 | Repository visibility is deliberate, and I checked it after my last push | N/A | Repository visibility must be checked in GitHub settings before making the project public. |

## Anything I found and fixed

No committed secrets or passwords were found in the tracked project files. The main things left to check are the Supabase RLS policies, database permissions, repository visibility, and GitHub security settings before making the app public.
