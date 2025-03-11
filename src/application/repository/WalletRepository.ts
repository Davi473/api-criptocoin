export default interface WalletRepository {
    findAll (): Promise<Wallet[]>;
    findById (id: string): Promise<Wallet>;
}