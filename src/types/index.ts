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
    role: "student" | "teacher" |"admin"
}

export type RegisterData = {
  name: string;
  email: string;
  dateOfBirth: string;
  phoneNr?: string; // ← ? = valfritt
  country?: string; // ← ? = valfritt
  password: string;
};

