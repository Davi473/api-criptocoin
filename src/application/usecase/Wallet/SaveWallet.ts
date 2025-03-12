import Wallet from "../../../domain/entity/Wallet";
import WalletRepository from "../../repository/WalletRepository";
import UseCase from "../UseCase";

export default class SaveWallet implements UseCase {
    private repository: WalletRepository;

    constructor (repository: WalletRepository) {
        this.repository = repository;
    }

    public async execute(input: Input): Promise<Output> {
        const wallet = Wallet.create(input.name, input.wallet, input.rede,
            input.crypto, input.currency, input.contract);
        await this.repository.save(wallet);
        return {
            id: wallet.id
        }
    }
}

type Input = {
    name: string,
    wallet: string,
    rede: string,
    contract: string,
    currency: string
    crypto: string
}

type Output = {
    id: string
}
