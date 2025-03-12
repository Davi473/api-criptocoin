export default class Currency {
    private value: string;

    constructor (currency: string) {
        const currencys = ["usd", "eur", "brl"];
        if (!currencys.includes(currency.toLowerCase())) throw new Error(`We do not use ${currency} currency`);
        this.value = currency;
    }

    public getValue(): string {
        return this.value;
    }
}