import CalculatorCrypto from "../../../domain/entity/CalculatorCrypto";
import FiduciarioCalculator from "../../../domain/entity/FiduciarioCalculator";
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
            const coinService = this.coinServiceProvider.provide(
                {moeda: wallet.getCrypto(), rede: wallet.getRede()});
            const amount = await coinService.getBalance(wallet.getWallet());
            const calculetorCrypto =new CalculatorCrypto(wallet.getCrypto(), amount);
            const currencyValueOfTheQuote = await this.currencyPriceService
                .getCryptoPrice(wallet.getCrypto(), wallet.getCurrency());
            const exchangeValue = new FiduciarioCalculator(currencyValueOfTheQuote, amount);
            output.push({
                id: wallet.id,
                name: wallet.getName(),
                amount: calculetorCrypto.getValue() ,
                wallet: wallet.getWallet(),
                rede: wallet.getRede(),
                currencyValueOfTheQuote,
                exchangeValue: exchangeValue.getValueFormatted(wallet.getSymbol()),
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
    currencyValueOfTheQuote: any,
    exchangeValue: any,
    contract: string,
    currency: string
    crypto: string
}

