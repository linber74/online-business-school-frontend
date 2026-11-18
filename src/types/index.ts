export type Course = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    duration: string;
    price: number;
    code: string
}

export type Role = 
    "student" | "teacher" | "admin";


export type User = {
    id: number;
    name: string;
    email: string;
    roles: Role[];
}

export type RegisterData = {
  name: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string; 
  country: string;
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


