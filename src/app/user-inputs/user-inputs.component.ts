import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvestmentData } from '../app.mode';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css'],
})
export class UserInputsComponent {
  @Output() inputsChanged = new EventEmitter<InvestmentData<number>>();
  @Output() onSubmit = new EventEmitter<InvestmentData<number>>();

  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturn = 5;
  enteredDuration = 10;


  onSubmitHandler() {
    const investmentData: InvestmentData<number> = {
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration,
    };
    this.onSubmit.emit(investmentData);
    this.enteredInitialInvestment = 0;
    this.enteredAnnualInvestment = 0;
    this.enteredExpectedReturn = 5;
    this.enteredDuration = 10;
  }
}
