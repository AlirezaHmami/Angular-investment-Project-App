export interface InvestmentData<T> {
  initialInvestment: T;
  duration: T;
  expectedReturn: T;
  annualInvestment: T;
}

export interface InvestmentResults {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

