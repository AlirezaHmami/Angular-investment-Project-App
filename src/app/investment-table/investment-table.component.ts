import { Component, Input } from '@angular/core';
import { InvestmentResults } from '../app.mode';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css'
})
export class InvestmentTableComponent {
  @Input({required : true}) investmentData?: InvestmentResults[];
}
