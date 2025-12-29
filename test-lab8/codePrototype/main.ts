import { UserInterface } from "./UserInterface";

const ui = new UserInterface();

ui.addGrade(90);
ui.addGrade(80);
ui.addGrade(70);

ui.showAverage(); // Average grade: 80

ui.clearGrades();
