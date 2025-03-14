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
        enum Symbol {
            "usd"= "$",
            "eur"= "€",
            "brl"= "R$"
        };
        const key = this.value.toLowerCase() as keyof typeof Symbol;
        if (!(key in Symbol)) {
            throw new Error(`Criptomoeda inválida: ${crypto}`);
        }
        return Symbol[key];
    }
}