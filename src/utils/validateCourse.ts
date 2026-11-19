import type { NewCourseData } from "../types";

export function validateCourse(data: NewCourseData) {
  const errors: Record<string, string> = {};

  if (!data.code.trim()) {
    errors.code = "Course code is required";
  }

  if (!data.title.trim()) {
    errors.title = "Title is required";
  }

  if (!data.description.trim()) {
    errors.description = "Description is required";
  } else if (data.description.length > 1000) {
    errors.description = "Max 1000 characters";
  }

  if (Number.isNaN(data.duration) || data.duration <= 0) {
    errors.duration = "Duration must be more than 0";
  }

  if (Number.isNaN(data.price) || data.price < 0) {
    errors.price = "Price cannot be negative";
  }
  return errors;
}
