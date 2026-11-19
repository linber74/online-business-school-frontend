import {
  mockCourses,
  mockEnrollments,
  mockUsers,
  type MockUser,
} from "./mockData";
import type {
  AdminEnrollment,
  Course,
  EnrollmentStatus,
  MyCourse,
  NewCourseData,
  RegisterData,
  User,
} from "../types";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function nextId(list: { id: number }[]): number {
  const highest = Math.max(0, ...list.map((item) => item.id));
  return highest + 1;
}

export async function getCourses(): Promise<Course[]> {
  await delay(300);
  return mockCourses;
}

export async function getCourse(id: number): Promise<Course | undefined> {
  await delay(300);
  return mockCourses.find((course) => course.id === id);
}

export async function login(email: string, password: string): Promise<User> {
  await delay(300);
  const found = mockUsers.find(
    (u) => u.email === email && u.password === password,
  );

  if (!found) {
    throw new Error("Wrong email or password");
  }

  return {
    id: found.id,
    name: found.name,
    email: found.email,
    roles: found.roles,
  };
}

export async function register(data: RegisterData): Promise<User> {
  await delay(300);

  const emailExist = mockUsers.some(
    (user) => user.email.toLowerCase() === data.email.toLowerCase(),
  );

  if (emailExist) {
    throw new Error("Email already registered");
  }

  const newUser: MockUser = {
    id: nextId(mockUsers),
    name: data.name,
    email: data.email,
    roles: ["student"],
    password: data.password,
  };

  mockUsers.push(newUser);
  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    roles: newUser.roles,
  };
}

export async function getMyCourses(userId: number): Promise<MyCourse[]> {
  await delay(300);

  const enrollments = mockEnrollments.filter((e) => e.userId === userId);

  const result = enrollments
    .map((enrollment) => {
      const course = mockCourses.find((c) => c.id === enrollment.courseId);
      if (!course) {
        return null;
      }
      return { enrollmentId: enrollment.id, status: enrollment.status, course };
    })
    .filter((item) => item !== null);

  return result;
}

export async function getEnrollments(): Promise<AdminEnrollment[]> {
  await delay(300);

  return mockEnrollments
    .map((enrollment) => {
      const student = mockUsers.find((u) => u.id === enrollment.userId);
      const course = mockCourses.find((c) => c.id === enrollment.courseId);
      if (!student || !course) {
        return null;
      }
      return {
        enrollmentId: enrollment.id,
        studentName: student.name,
        courseTitle: course.title,
        status: enrollment.status,
      };
    })
    .filter((item) => item !== null);
}

export async function updateEnrollmentStatus(
  enrollmentId: number,
  status: EnrollmentStatus,
): Promise<void> {
  await delay(300);

  const enrollment = mockEnrollments.find((item) => item.id === enrollmentId);
  if (!enrollment) {
    throw new Error("Enrollment not found");
  }
  enrollment.status = status;
}

export async function createCourse(data: NewCourseData): Promise<Course> {
  await delay(300);

  const codeExists = mockCourses.some(
    (course) => course.code.toLowerCase() === data.code.toLowerCase(),
  );

  if (codeExists) {
    throw new Error("Course code already exists");
  }

  const newCourse: Course = {
    id: nextId(mockCourses),
    code: data.code,
    title: data.title,
    description: data.description,
    duration: data.duration,
    price: data.price,
    imageUrl: data.imageUrl,
  };

  mockCourses.push(newCourse);

  return newCourse;
}
