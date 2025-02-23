import { Component, Input } from '@angular/core';
import { InvestmentResults } from '../app.mode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-table.component.html',
  styleUrls: ['./investment-table.component.css'],
})
export class InvestmentTableComponent {
  @Input() investmentData: InvestmentResults[] | undefined;

}
