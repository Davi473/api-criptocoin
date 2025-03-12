import crypto from "crypto";

export default class Wallet {
    private name: string;
    private wallet: string;
    private coin: string;
    private contract: string;
    private nameCoin: string;

    constructor (
        readonly id: string, name: string, wallet: string, 
        coin: string, contract: string, nameCoin: string
    ) {
        this.name = name;
        this.wallet = wallet;
        this.coin = coin;
        this.contract = contract;
        this.nameCoin = nameCoin;
    }

    public static create(
        name: string, wallet: string, coin: string,
        nameCoin: string, contract: string = ""
    ): Wallet {
        const id = crypto.randomUUID();
        return new Wallet(id, name, wallet, coin, contract, nameCoin);
    }

    public getName (): string {
        return this.name;
    }

    public getWallet (): string {
        return this.wallet;
    }   

    public getCoin (): string {
        return this.coin;
    }

    public getContract (): string {
        return this.contract;
    }

    public getNameCoin (): string {
        return this.nameCoin;
    }
}