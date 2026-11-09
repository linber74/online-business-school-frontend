import { mockCourses, mockUsers, type MockUser } from "./mockData";
import type { Course, RegisterData, User } from "../types";

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

export async function login(email: string, password: string): Promise<User> {
    await delay(300);
    const found = mockUsers.find(u => u.email === email &&
        u.password === password
    );

    if (!found) {
        throw new Error("Wrong email or password");
    }

    return {id: found.id, name: found.name, email: found.email, roles: found.roles}
}

export async function register(data: RegisterData): Promise<User> {
    await delay(300);

    const emailExist = mockUsers.some(
        (user) => user.email.toLowerCase() === data.email.toLowerCase()
    );
    
    if (emailExist) {
        throw new Error("Email already registered");
    }

    const newUser: MockUser = {
        id: mockUsers.length + 1,
        name: data.name,
        email: data.email,
        roles: ["student"],
        password: data.password,
    }

    mockUsers.push(newUser);
    return { id: newUser.id, name: newUser.name, email: newUser.email, roles: newUser.roles }

}