import CoinServiceProvider from "../../../infra/service/coinServiceProvider";
import CurrencyPriceService from "../../../infra/service/CurrencyPriceService";
import WalletRepository from "../../repository/WalletRepository";
import UseCase from "../UseCase";

export default class GetWallet implements UseCase {
    private repository: WalletRepository;
    private coinServiceProvider: CoinServiceProvider;
    private currencyPriceService: CurrencyPriceService;

    constructor (
        repository: WalletRepository,
        coinServiceProvider: CoinServiceProvider,
        currencyPriceService: CurrencyPriceService
    ) {
        this.repository = repository;
        this.coinServiceProvider = coinServiceProvider
        this.currencyPriceService = currencyPriceService;
    }

    public async execute(): Promise<Output[]> {
        const wallets = await this.repository.findAll();
        const output: Output[] = [];
        for (const wallet of wallets) {
            const amountWallet = this.coinServiceProvider.provide(
                {moeda: wallet.getCrypto(), rede: wallet.getRede()});
            const amount = await amountWallet.getBalance(wallet.getWallet()) / wallet.getReference();
            let currencyValueOfTheQuote = await this.currencyPriceService
                .getCryptoPrice(wallet.getCrypto(), wallet.getCurrency());
            output.push({
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
    totalValeu: number | string,
    currencyValueOfTheQuote: number,
    crypto: string
}


