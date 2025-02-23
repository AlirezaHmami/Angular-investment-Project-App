import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { InvestmentTableComponent } from "./investment-table/investment-table.component";
import { InvestmentService } from './investment.service';
import { InvestmentData, InvestmentResults } from './app.mode';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputsComponent, InvestmentTableComponent],
})
export class AppComponent {
  investmentData: InvestmentData<number> = {
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 10,
    expectedReturn: 5,
  };

  investmentResults: InvestmentResults[] | undefined;


  constructor(private investmentService: InvestmentService) { }

  onSubmitHandler(investmentData: InvestmentData<number>) {
    this.investmentData = investmentData;
    this.investmentResults = this.investmentService.calculateInvestmentResults(investmentData);
  }

}
