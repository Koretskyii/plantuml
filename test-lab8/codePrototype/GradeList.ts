import { Grade } from "./Grade";
import { GradeService } from "./GradeService";

export class GradeList {
  private grades: Grade[] = [];
  private service: GradeService = new GradeService();

  addGrade(value: number): void {
    this.grades.push(new Grade(value));
  }

  getAverage(): number {
    return this.service.calculateAverage(this.grades);
  }

  clear(): void {
    this.grades = [];
  }

  getGrades(): Grade[] {
    return this.grades;
  }
}
