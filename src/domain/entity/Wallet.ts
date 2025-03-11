export default class Wallet {
    private name: string;
    private wallet: string;
    private coin: string;
    private amount: number;

    constructor (readonly id, name: string, wallet: string, coin: string, blockChain: string) {
        this.name = name;
        this.wallet = wallet;
        this.coin = coin;
    }

    public getName(): string {
        return this.name;
    }


}