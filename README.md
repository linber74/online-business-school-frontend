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

### Scripts
| Command           | What it does                         |
|-------------------|--------------------------------------|
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Type check and build (run before a PR) |
| `npm run lint`    | Run ESLint                           |
| `npm run preview` | Preview the production build         |

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

The "Student info" link in the header is only shown to logged-in students
(not to logged-out users, admins or teachers). The page itself is protected
by `ProtectedRoute`.

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
- Course duration in hours or weeks
- Home page with clickable cards (Courses, Lectures, Student info)
- Admin confirms or rejects enrollments
- Admin creates courses (form with validation)
- Footer that stays at the bottom of the page

## Enrollment statuses
| Status    | Meaning                                  |
|-----------|------------------------------------------|
| Pending   | Applied, waiting for the admin           |
| Confirmed | Confirmed by the admin, the course is active |
| Rejected  | Rejected by the admin                    |
| Completed | The course is finished                   |

The type is `EnrollmentStatus` in `src/types/index.ts`.

## Grading scale
- The scale is A–F, where F is fail and A–E are pass
- It is defined in one place: `src/utils/grades.ts` (`GRADES`, `Grade`,
  `isPassing`)
- Grades are stored as text (`"A"`), not numbers
- To change the scale, update `GRADES` and check `isPassing`
- Not used in the UI yet (groundwork for teacher grading and student results)

## Data loading (useFetch)
`src/hooks/useFetch.ts` is a hook for loading data in pages. It returns
`data`, `loading`, `error` and `reload`.

```
const { data, loading, error, reload } = useFetch(fetcher, deps)
```
- `fetcher`: a function that returns a promise (for example `getCourses`)
- `deps`: a list of values that trigger a new fetch when they change
- `data` is `null` until the data has loaded, so check it before using it
- Call `reload()` to fetch again (for example after confirming an enrollment)

## Styling
- Global CSS variables are in `src/index.css` (`:root`): colors, border radius
  and font. Use `var(--color-primary)` etc. instead of hardcoded values
- Shared button style: `className="btn"` (works on `<button>` and on links).
  It has hover and keyboard focus styles. Set spacing per component, for
  example `.course-form .btn { margin-top: 1rem; }`
- CSS in Vite is global, so use unique class names (for example
  `course-card`, not `card`)
- The layout wrapper `app-layout` / `app-content` in `App.tsx` keeps the
  footer at the bottom

## Mock API
All data comes from src/api/api.ts and mockData.ts. Changes (new courses,
enrollment status) are lost when the page is reloaded. It will be replaced
by real backend calls later.

## Project structure
```
src/
  api/          Mock API (replaced by real backend calls later)
  components/   Reusable parts (Header, Footer, Card, CourseCard, CourseForm, ProtectedRoute)
  context/      AuthContext (logged-in user)
  hooks/        useFetch (loading, error and data for pages)
  pages/        Pages (Home, Courses, Login, Register, Dashboard ...)
  types/        Shared TypeScript types
  utils/        Helper functions (validateRegister, validateCourse, getHomePath, grades)
```

## Workflow
- One branch per task, named feature/..., fix/... or docs/...
- Always start from an updated main: `git checkout main`, `git pull`, then
  create the branch
- Open a pull request to main when the task is done
- Use the same format in every pull request description: What, Why,
  How to review, Note
- Run `npm run build` before opening a pull request
- Ask a teammate to review your pull request (use Reviewers in GitHub)
- Pull requests need at least one approval before merging
- To update your branch, merge `main` into it (never another feature branch)
- Until further notice: the repository owner (Linda) may merge using the
  bypass if nobody has reviewed after 2 hours (next day if the pull request
  was opened at night)
- Leave a comment in the pull request when merging without review