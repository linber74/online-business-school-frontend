export type DurationUnit = "hours" | "weeks";

export type Course = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    duration: number;
    durationUnit: DurationUnit;
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

export type AdminEnrollment = {
    enrollmentId: number;
    studentName: string;
    courseTitle: string;
    status: EnrollmentStatus;
};

export type NewCourseData = {
    code: string;
    title: string;
    description: string;
    duration: number;
    durationUnit: DurationUnit;
    price: number;
    imageUrl: string;
}
