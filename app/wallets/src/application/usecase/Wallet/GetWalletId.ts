import CoinServiceProvider from "../../../infra/service/coinServiceProvider";
import CurrencyPriceService from "../../../infra/service/CurrencyPriceService";
import WalletRepository from "../../repository/WalletRepository";
import UseCase from "../UseCase";

export default class GetWalletId implements UseCase {
    private repository: WalletRepository;
    private coinServiceProvider: CoinServiceProvider;
    private currencyPriceService: CurrencyPriceService

    constructor (
        repository: WalletRepository,
        coinServiceProvider: CoinServiceProvider,
        currencyPriceService: CurrencyPriceService
    ) {
        this.repository = repository;
        this.coinServiceProvider = coinServiceProvider;
        this.currencyPriceService = currencyPriceService;
    }

    public async execute(input: Input): Promise<Output> {
        const wallet = await this.repository.findById(input.id);
        const amountWallet = this.coinServiceProvider.provide(
            {moeda: wallet.getCrypto(), rede: wallet.getRede()});
        const amount = await amountWallet.getBalance(wallet.getWallet()) / wallet.getReference();
        let currencyValueOfTheQuote = await this.currencyPriceService
            .getCryptoPrice(wallet.getCrypto(), wallet.getCurrency());
        const output = {
            id: wallet.id,
            name: wallet.getName(),
            amount: amount ,
            wallet: wallet.getWallet(),
            rede: wallet.getRede(),
            currencyValueOfTheQuote,
            totalValeu: (amount * currencyValueOfTheQuote).toFixed(2),
            contract: wallet.getContract(),
            currency: wallet.getCurrency(),
            crypto: wallet.getCrypto()
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


