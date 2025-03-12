import * as crypt from "crypto";
import Rede from "../vo/Rede";
import Currency from "../vo/Currency";

export default class Wallet {
    private name: string;
    private wallet: string;
    private rede: Rede;
    private contract: string;
    private crypto: string;
    private currency: Currency;

    constructor (
        readonly id: string,
        name: string, 
        wallet: string, 
        rede: string, 
        contract: string, 
        crypto: string,
        currency: string
    ) {
        this.name = name;
        this.wallet = wallet;
        this.rede = new Rede(rede);
        this.contract = contract;
        this.crypto = crypto;
        this.currency = new Currency(currency);
    }

    public static create(
        name: string, wallet: string, rede: string,
        crypto: string, currency: string, contract: string = ""
    ): Wallet {
        const id = crypt.randomUUID();
        return new Wallet(id, name, wallet, rede, contract, crypto, currency);
    }

    public getName (): string {
        return this.name;
    }

    public getWallet (): string {
        return this.wallet;
    }   

    public getRede (): string {
        return this.rede.getValue();
    }

    public getContract (): string {
        return this.contract;
    }

    public getCrypto (): string {
        return this.crypto;
    }

    public getCurrency(): string {
        return this.currency.getValue();
    }
}