/**
 * This code was generated by Builder.io.
 */
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-monthly-budget-tracker",
  templateUrl: "./monthly-budget-tracker.component.html",
  styleUrls: ["./monthly-budget-tracker.component.css"],
  standalone: true,
  imports: [CommonModule]
})
export class MonthlyBudgetTrackerComponent {
  currentDate: string;
  currentSales: number = 0; // Initialize with a default value
  salesGoal: number = 50000;
  progressPercentage: number = 0;
  selectedDay: number;
  selectedDateString!: string; // Use definite assignment assertion

  dailySales: { day: number; sales: number }[] = [
    { day: 1, sales: 1000 },
    { day: 2, sales: 1200 },
    { day: 3, sales: 1100 },
    { day: 4, sales: 1300 },
    { day: 5, sales: 1400 },
    { day: 6, sales: 1500 },
    { day: 7, sales: 1600 },
    { day: 8, sales: 1700 },
    { day: 9, sales: 1800 },
    { day: 10, sales: 1900 },
    { day: 11, sales: 2000 },
    { day: 12, sales: 1100 },
    { day: 13, sales: 1200 },
    { day: 14, sales: 1300 },
    { day: 15, sales: 1400 },
    { day: 16, sales: 1500 },
    { day: 17, sales: 1600 },
    { day: 18, sales: 1700 },
    { day: 19, sales: 1800 },
    { day: 20, sales: 1900 },
    { day: 21, sales: 2000 },
    { day: 22, sales: 2100 },
    { day: 23, sales: 2200 },
    { day: 24, sales: 2300 },
    { day: 25, sales: 2400 },
    { day: 26, sales: 1500 },
    { day: 27, sales: 1600 },
    { day: 28, sales: 2700 },
    { day: 29, sales: 2800 },
    { day: 30, sales: 2900 },
    { day: 31, sales: 3000 }
  ];

  constructor() {
    const today = new Date();
    this.currentDate = today.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });

    const currentDay = today.getDate();
    this.selectedDay = currentDay;
    this.updateSales(currentDay);
  }

  updateSales(day: number): void {
    this.selectedDay = day;
    this.currentSales = this.dailySales
      .filter(sale => sale.day <= day)
      .reduce((total, sale) => total + sale.sales, 0);

    this.progressPercentage = (this.currentSales / this.salesGoal) * 100;

    const selectedDate = new Date();
    selectedDate.setDate(day);
    this.selectedDateString = selectedDate.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  isToday(day: number): boolean {
    const today = new Date();
    return day === today.getDate();
  }
}