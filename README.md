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
| Teacher | teacher@test.com  | teacher12345 |


## Roles and start pages
| Role    | Start page | Can access                          |
|---------|------------|-------------------------------------|
| Student | /dashboard | Courses, My courses, Student info   |
| Teacher | /teacher   | Teacher area                        |
| Admin   | /admin     | Admin area, enrollments, new course |

Route protection in the frontend is only for user experience. The backend
must check roles and course access too.

## Pages
- Public: Home, Courses, Course details, Login, Register
- Student: Dashboard, My courses, Student info
- Admin: /admin, /admin/enrollments, /admin/courses/new
- Teacher: /teacher (empty for now)
- Error pages: 403 (no access), 404 (not found)

## Features
- Registration with field validation
- Login with role-based start pages
- Courses with unique course code
- Admin confirms or rejects enrollments
- Admin creates courses (form with validation)

## Mock API
All data comes from src/api/api.ts and mockData.ts. Changes (new courses,
enrollment status) are lost when the page is reloaded. It will be replaced
by real backend calls later.

## Project structure
```
src/
  api/          Mock API (replaced by real backend calls later)
  components/   Reusable parts (Header, Card, CourseCard, ProtectedRoute)
  context/      AuthContext (logged-in user)
  pages/        Pages (Home, Courses, Login, Register, Dashboard ...)
  types/        Shared TypeScript types
  utils/        Helper functions (validateRegister, validateCourse, getHomePath)
```

## Workflow
- One branch per task, named feature/..., fix/... or docs/...
- Open a pull request to main when the task is done
- Ask a teammate to review your pull request (use Reviewers in GitHub)
- Pull requests need at least one approval before merging
- Temporary: until more team members have started their LIA, the repository
  owner (Linda) may merge using the bypass if nobody has reviewed after 2
  hours (next day if the pull request was opened at night)
- Leave a comment in the pull request when merging without review
