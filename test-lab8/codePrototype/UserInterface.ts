import { GradeList } from "./GradeList";

export class UserInterface {
  private gradeList = new GradeList();

  addGrade(value: number): void {
    if (value < 0 || value > 100) {
      console.log("Invalid grade value");
      return;
    }
    this.gradeList.addGrade(value);
  }

  showAverage(): void {
    const average = this.gradeList.getAverage();
    console.log("Average grade:", average);
  }

  clearGrades(): void {
    this.gradeList.clear();
    console.log("Grade list cleared");
  }
}
