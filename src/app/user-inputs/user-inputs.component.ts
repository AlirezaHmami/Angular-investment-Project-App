import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../app.mode';

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


    this.onSubmit.emit(investmentData);

  }
}
