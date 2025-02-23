import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { InvestmentResults, type InvestmentData } from './app.mode';
import { InvestmentTableComponent } from "./investment-table/investment-table.component";

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
  }

  calculateInvestmentResults({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: InvestmentData<number>) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }

  investmentResults?: InvestmentResults[];

  onSubmitHandler(investmentData: InvestmentData<number>) {
    this.investmentData = investmentData;
    this.investmentResults = this.calculateInvestmentResults(investmentData);
  }
}
