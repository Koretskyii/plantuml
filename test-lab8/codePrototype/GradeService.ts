import { Grade } from "./Grade";

export class GradeService {
  calculateAverage(grades: Grade[]): number {
    if (grades.length === 0) {
      return 0;
    }

    const sum = grades.reduce((acc, grade) => acc + grade.value, 0);
    return sum / grades.length;
  }
}
