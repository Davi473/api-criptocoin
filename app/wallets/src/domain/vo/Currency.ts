export default class Currency {
    private value: string;

    constructor (currency: string) {
        const currencys = ["usd", "eur", "brl"];
        if (!currency) throw new Error("Cannot empty value");
        if (!currencys.includes(currency.toLowerCase())) throw new Error(`We do not use ${currency} currency`);
        this.value = currency;
    }

    public getValue(): string {
        return this.value;
    }

    public getSymbol(): string {
        const symbol: Record<string, string> = {
            "usd": "$",
            "eur": "€",
            "brl": "R$"
        };
        return symbol[`${this.value}`];
    }
}