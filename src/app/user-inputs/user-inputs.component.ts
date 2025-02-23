import { Component, EventEmitter, input, output, Output, signal } from '@angular/core';
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
  inputsChanged = output<InvestmentData<number>>();
  onSubmit = output<InvestmentData<number>>();
  enteredInitialInvestment = signal<number>(0);
  enteredAnnualInvestment = signal<number>(0);
  enteredExpectedReturn = signal<number>(5);
  enteredDuration = signal<number>(10);


  onSubmitHandler() {
    const investmentData: InvestmentData<number> = {
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration(),
    };
    this.onSubmit.emit(investmentData);
    this.enteredInitialInvestment.set(0)
    this.enteredAnnualInvestment.set(0)
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
  }
}
