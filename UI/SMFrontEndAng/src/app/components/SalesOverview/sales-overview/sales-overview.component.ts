/**
 * This code was generated by Builder.io.
 */
import { Component } from '@angular/core';
import { SalesChartComponent } from '../salesChart/salesChart.component';

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  templateUrl: './sales-overview.component.html',
  styleUrls: ['./sales-overview.component.css'],
  imports: [SalesChartComponent]
})
export class SalesOverviewComponent {
  year: number = 2024;
}