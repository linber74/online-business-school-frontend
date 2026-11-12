export type Course = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    duration: string;
    price: number;
}

export type User = {
    id: number;
    name: string;
    email: string;
    roles: ("student" | "teacher" | "admin")[];
}

export type RegisterData = {
  name: string;
  email: string;
  dateOfBirth: string;
  phoneNr?: string; // ← ? = valfritt
  country?: string; // ← ? = valfritt
  password: string;
};

export type EnrollmentStatus =
    "Pending" | "Confirmed" | "Rejected" | "Completed";

export type Enrollment = {
  id: number;
  userId: number;
  courseId: number;
  status: EnrollmentStatus;
};

export type MyCourse = {
    enrollmentId: number;
    status: EnrollmentStatus;
    course: Course;
};
