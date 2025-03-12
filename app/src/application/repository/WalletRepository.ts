import Wallet from "../../domain/entity/Wallet";

export default interface WalletRepository {
    findAll (): Promise<Wallet[]>;
    findById (id: string): Promise<Wallet>;
    save (wallet: Wallet): Promise<void>;
}