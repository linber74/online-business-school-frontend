import type { User } from "../types";

export function getHomePath(user: User): string {
    if (user.roles.includes("admin")) {
        return "/admin";
    }
    if (user.roles.includes("teacher")) {
        return "/teacher";
    }
    return "/dashboard";
}