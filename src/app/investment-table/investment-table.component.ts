import { Component, input } from '@angular/core';
import { InvestmentResults } from '../app.mode';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css',
})
export class InvestmentTableComponent {
  readonly investmentData = input.required<InvestmentResults[] | undefined>();
}
