import WalletRepository from "../../application/repository/WalletRepository";
import Wallet from "../../domain/entity/Wallet";

export default class WalletRepositoryMemory implements WalletRepository {
    private wallets: Wallet[];

    constructor () {
        this.wallets = [];
    }

    public async findAll(): Promise<Wallet[]> {
        return this.wallets;
    }

    public async findById(id: string): Promise<Wallet> {
        const [filter] = this.wallets.filter(wallet => wallet.id === id);
        return filter;
    }

    public async save(wallet: Wallet): Promise<void> {
        this.wallets.push(wallet);
    }
}