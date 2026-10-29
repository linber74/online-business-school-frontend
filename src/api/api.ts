import { mockCourses } from "./mockData";
import type { Course } from "../types";

function delay(ms : number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCourses(): Promise<Course[]> {
    await delay(300);
    return mockCourses;
}

export async function getCourse(id: number): Promise<Course | undefined>{
    await delay(300);
    return mockCourses.find(course => course.id === id);
}