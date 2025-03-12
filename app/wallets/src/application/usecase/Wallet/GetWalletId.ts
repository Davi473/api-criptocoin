import BaseService from "../../../infra/service/BaseService";
import BitcoinService from "../../../infra/service/BitcoinService";
import WalletRepository from "../../repository/WalletRepository";
import UseCase from "../UseCase";

export default class GetWalletId implements UseCase {
    private repository: WalletRepository;
    private baseService: BaseService;
    private bitcoinService: BitcoinService;

    constructor (
        repository: WalletRepository,
        baseService: BaseService,
        bitcoinService: BitcoinService
    ) {
        this.repository = repository;
        this.baseService = baseService;
        this.bitcoinService = bitcoinService

    }

    public async execute(input: Input): Promise<Output> {
        const wallet = await this.repository.findById(input.id);
        let amount: number;
        if (wallet.getRede() === "BTC") 
            amount = await this.bitcoinService.getBitcoinBalance(wallet.getWallet());
        else if (wallet.getRede() === "Base")
            amount = await this.baseService.getBaseBalance(wallet.getWallet(), wallet.getContract());
        else 
            amount = 0;
        const output = {
            id: wallet.id,
            name: wallet.getName(),
            amount: amount,
            wallet: wallet.getWallet(),
            rede: wallet.getRede(),
            contract: wallet.getContract(),
            currency: wallet.getCurrency(),
            crypto: wallet.getCrypto(),
        };
        return output;
    }
}

type Input = {
    id: string
}

type Output = {
    id: string,
    name: string,
    wallet: string,
    amount: string | number,
    rede: string,
    contract: string,
    currency: string
    crypto: string
}


