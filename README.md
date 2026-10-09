# Haneul Hangye (하늘항계)

Haneul Hangye is a Korean language learning tracker designed to help students organize vocabulary, log study sessions, and review their learning progress in one place.

Status: this project is currently running as a local React + Supabase app for user authentication and personal study data.

## What it does

- Create an account and sign in securely with Supabase Auth
- Track study sessions by activity type, date, duration, and notes
- Add, edit, and delete vocabulary words by category
- Review dashboard metrics such as words learned, total study hours, and recent sessions
- Use a protected route flow so each user sees only their own data

## Key features

- Dashboard overview with learning statistics and recent session summaries
- Sessions page for logging and managing study activities
- Vocabulary page for Korean words, categories, and Hangul reference cards
- Forgot password and reset password flows for account recovery
- Responsive interface built with React and Vite

## Built with

- React
- Vite
- React Router
- Supabase Auth + Supabase PostgreSQL database

## Project structure

```text
Haneul-Hangye/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── db/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
├── docs/
│   └── project planning and design documents
├── LICENSE
├── README.md
├── START-HERE.md
└── AI-USAGE.md
```

## Architecture

The app is a frontend-first learning tracker. The client handles the user experience, route-based screens, and study tracking UI, while Supabase provides authentication and stores each learner's vocabulary and study-session records in the database. The dashboard reads from the user's records and updates the summary cards and recent activity list automatically.

## Getting started

1. Open a terminal in the project root.
2. Install the client dependencies:

```bash
cd client
npm install
```

3. Create a local environment file based on the example:

```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

5. Start the app:

```bash
npm run dev
```

The app will run by default at `http://localhost:5173`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Public anonymous key used for client-side auth and database access |

## User flow

- Sign up for a new account
- Log in to access the dashboard
- Review words learned, hours studied, and total sessions
- Add vocabulary entries by category and topic
- Record study sessions with notes and duration
- Reset password if needed through the recovery flow

## What I would do next

- Quizzes and Flashcards. Develop quiz and flashcard features to help users review vocabulary and practice what they have learned.
- Add more advanced analytics such as streak tracking, word mastery progress, and weekly goals
- Improve accessibility, polish the visual design, and expand the learning features for deeper study habits

## Author

Rafael Allan D. Alvarado

## AI use

![Built with AI assistance](https://img.shields.io/badge/built%20with-AI%20assistance-0b5fff)

This project was developed with GitHub Copilot, Claude, and GPT assistance to support planning, implementation, debugging, and documentation updates.

## License

MIT License. See [LICENSE](LICENSE) for details.
