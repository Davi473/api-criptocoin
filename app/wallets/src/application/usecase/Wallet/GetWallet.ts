import BaseService from "../../../infra/service/BaseService";
import BitcoinService from "../../../infra/service/BitcoinService";
import CurrencyPriceService from "../../../infra/service/CurrencyPriceService";
import WalletRepository from "../../repository/WalletRepository";
import UseCase from "../UseCase";

export default class GetWallet implements UseCase {
    private repository: WalletRepository;
    private baseService: BaseService;
    private bitcoinService: BitcoinService;
    private currencyPriceService: CurrencyPriceService;

    constructor (
        repository: WalletRepository,
        baseService: BaseService,
        bitcoinService: BitcoinService,
        currencyPriceService: CurrencyPriceService
    ) {
        this.repository = repository;
        this.baseService = baseService;
        this.bitcoinService = bitcoinService
        this.currencyPriceService = currencyPriceService;
    }

    public async execute(): Promise<Output[]> {
        const wallets = await this.repository.findAll();
        
        const output: Output[] = [];
        for (const wallet of wallets) {
            let amount: number =0;
            if (wallet.getRede() === "BTC") 
                amount = await this.bitcoinService.getBitcoinBalance(wallet.getWallet());
            if (wallet.getRede() === "Base")
                amount = await this.baseService.getBaseBalance(wallet.getWallet(), wallet.getContract());
            amount = amount / wallet.getReference();
            let currencyValueOfTheQuote = await this.currencyPriceService
                .getCryptoPrice(wallet.getCrypto().toLowerCase(), wallet.getCurrency().toLowerCase());
            output.push({
                id: wallet.id,
                name: wallet.getName(),
                amount,
                wallet: wallet.getWallet(),
                rede: wallet.getRede(),
                currencyValueOfTheQuote,
                totalValeu: amount * currencyValueOfTheQuote,
                contract: wallet.getContract(),
                currency: wallet.getCurrency(),
                crypto: wallet.getCrypto()
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
    rede: string,
    contract: string,
    currency: string,
    totalValeu: number,
    currencyValueOfTheQuote: number,
    crypto: string
}


