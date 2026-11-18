import type { RegisterData } from "../types";

export function validateRegister(data: RegisterData, repeatPassword: string) {
  const errors: Record<string, string> = {};

  //email
  if (!data.email || data.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!data.email.includes("@")) {
    errors.email = "Enter a valid email";
  }

  //name
  if (!data.name || data.name.trim() === "") {
    errors.name = "Name is required";
  }

  //birthdate
  const today = new Date().toISOString().slice(0, 10);
  if (!data.dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required";
  } else if (data.dateOfBirth >= today) {
    errors.dateOfBirth = "Date must be in the past";
  }

  //phoneNumber
  if (!data.phoneNumber || data.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required";
  }

  //country
  if (!data.country || data.country.trim() === "") {
    errors.country = "Country is required";
  }

  //password
  if (!data.password || data.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  //repeatpassword
  if (repeatPassword !== data.password) {
    errors.repeatPassword = "Passwords do not match";
  }

  return errors;
}
