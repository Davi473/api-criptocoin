export default class Currency {
    private value: string;

    constructor (currency: string) {
        const currencys = ["usd", "eur", "brl", "chf"];
        if (!currency) throw new Error("Cannot empty value");
        if (!currencys.includes(currency.toLowerCase())) throw new Error(`We do not use ${currency} currency`);
        this.value = currency;
    }

    public getValue(): string {
        return this.value;
    }

    public getSymbol(): string {
        enum Symbol {
            "usd"= "$",
            "eur"= "€",
            "brl"= "R$",
            "chf"= "CHF"
        };
        const key = this.value.toLowerCase() as keyof typeof Symbol;
        if (!(key in Symbol)) {
            throw new Error(`Currency inválida: ${crypto}`);
        }
        return Symbol[key];
    }
}