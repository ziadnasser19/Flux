import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.html',
  styleUrl: './chart.scss',
})
export class ChartComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // Receive data from Dashboard
  @Input() chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  // src/app/components/chart/chart.ts

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          // 1. This creates the gap between the Circle and the Word
          padding: 20, // Spacing between the items themselves
          font: { family: "'Outfit', sans-serif" },
        },
      },
      // 2. Explicitly enable tooltips
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#201e34',
        bodyColor: '#64748b',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
      },
    },
    // 3. This is CRITICAL for the hover to work when pointRadius is 0
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: "'Kumbh Sans', sans-serif" } },
      },
      y: {
        beginAtZero: true,
        grid: { display: true, color: '#f0f0f0' },
        border: { display: false },
        ticks: { font: { family: "'Kumbh Sans', sans-serif" } },
      },
    },
  };
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && this.chart) {
      this.chart.update();
    }
  }
}
