export default class FiduciarioCalculator {
    private value: number;

    constructor (currencyQuote: number, amountOfCurrency: number) {
        this.value = currencyQuote * amountOfCurrency;
    }

    public getValue(): number {
        return this.value;
    }

    public getValueFormatted(currencySymbol: string): string {
        return `${currencySymbol} ${this.value.toFixed(2)}`
    }
}