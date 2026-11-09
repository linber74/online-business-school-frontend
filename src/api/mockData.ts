import type { Course, User } from "../types";

export const mockCourses: Course[] = [
  {
    id: 1,
    title: "Marketing basics",
    description:
      "Learn the fundamentals of marketing and how to reach customers.",
    imageUrl: "/images/Marketing.jpg",
    duration: "6 weeks",
    price: 290,
  },
  {
    id: 2,
    title: "Leadership",
    description: "Develop your leadership skills and learn to guide teams.",
    imageUrl: "/images/Leadership.jpg",
    duration: "8 weeks",
    price: 390,
  },
  {
    id: 3,
    title: "Financial analysis",
    description:
      "Understand financial statements and make better business decisions.",
    imageUrl: "/images/Finance.jpg",
    duration: "4 weeks",
    price: 240,
  },
];

export type MockUser = User & { password: string };

export const mockUsers: MockUser[] = [
  {
    id: 1,
    name: "Test Student",
    email: "student@test.com",
    roles: ["student"],
    password: "password123",
  },
  {
    id: 2,
    name: "Test Admin",
    email: "admin@test.com",
    roles: ["admin"],
    password: "admin12345",
  },
  {
    id: 3,
    name: "Test Teacher",
    email: "teacher@test.com",
    roles: ["teacher"],
    password: "teacher12345",
  },
];