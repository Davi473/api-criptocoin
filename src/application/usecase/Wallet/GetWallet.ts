import BaseService from "../../../infra/service/BaseService";
import BitcoinService from "../../../infra/service/BitcoinService";
import WalletRepository from "../../repository/WalletRepository";
import UseCase from "../UseCase";

export default class GetWallet implements UseCase {
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

    public async execute(): Promise<Output[]> {
        const wallets = await this.repository.findAll();
        
        const output: Output[] = [];
        for (const wallet of wallets) {
            let amount: number;
            if (wallet.getCoin() === "BTC") 
                amount = await this.bitcoinService.getBitcoinBalance(wallet.getWallet());
            else if (wallet.getCoin() === "Base")
                amount = await this.baseService.getBaseBalance(wallet.getWallet(), wallet.getContract());
            else 
                amount = 0;
            output.push({
                id: wallet.id,
                name: wallet.getName(),
                amount: amount,
                wallet: wallet.getWallet(),
                coin: wallet.getCoin(),
                contract: wallet.getContract(),
                nameCoin: wallet.getNameCoin()
            });
        }
        return output;
    }
}

type Output = {
    id: string,
    name: string,
    amount: string | number,
    wallet: string,
    coin: string,
    contract: string,
    nameCoin: string
}


