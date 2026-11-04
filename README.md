# Online Business School: Frontend

Frontend for the Online Business School, an online school with live and
recorded lectures. Built by the LIA student team.

> Status: in development. The backend is not connected yet. The app uses a
> mock API with fake test data.

## Tech
- React + TypeScript
- Vite
- React Router

## Getting started
1. Clone the repository: `git clone <repository-url>`
2. Go to the folder: `cd online-business-school-frontend`
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev`
5. Open http://localhost:5173

## Test accounts (fake data)
These accounts only exist in `src/api/mockData.ts` and are used for testing
until the backend is connected.

| Role    | Email             | Password    |
|---------|-------------------|-------------|
| Student | student@test.com  | password123 |
| Admin   | admin@test.com    | admin12345  |

## Project structure
```
src/
  api/          Mock API (replaced by real backend calls later)
  components/   Reusable parts (Header, Card, CourseCard, ProtectedRoute)
  context/      AuthContext (logged-in user)
  pages/        Pages (Home, Courses, Login, Register, Dashboard ...)
  types/        Shared TypeScript types
```

## Pages
- Done: Home, Courses, Course details, Login, Register, Dashboard
- Protected (login required): Dashboard, Student info
- Planned: My courses, Profile, Results and certificates, Apply, admin pages

## Workflow
- One branch per task, named feature/..., fix/... or docs/...
- Open a pull request to main when the task is done
