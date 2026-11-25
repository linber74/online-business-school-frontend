//Grading scale. Change the list here to change the scale.
export const GRADES = ["A", "B", "C", "D", "E", "F"] as const;

export type Grade = (typeof GRADES)[number];

export function isPassing(grade: Grade): boolean {
  return grade !== "F";
}
