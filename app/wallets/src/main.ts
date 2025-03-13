import "dotenv/config"
import AdaptorExpress from "./infra/http/HttpServer"
import GetWallet from "./application/usecase/Wallet/GetWallet";
import WalletRepositoryMemory from "./infra/repository/WalletRepository";
import WalletController from "./infra/controller/WalletController";
import SaveWallet from "./application/usecase/Wallet/SaveWallet";
import GetWalletId from "./application/usecase/Wallet/GetWalletId";
import CurrencyPriceService from "./infra/service/CurrencyPriceService";
import CoinServiceProvider from "./infra/service/coinServiceProvider";

const PORT = process.env.PORT || 3000
const API = new AdaptorExpress();

const repository = new WalletRepositoryMemory();

const coinServiceProvider = new CoinServiceProvider();
const currencyPrice = new CurrencyPriceService();

const getWallet = new GetWallet(repository, coinServiceProvider, currencyPrice);
const saveWallet = new SaveWallet(repository);
const getWalletId = new GetWalletId(repository, coinServiceProvider, currencyPrice);

new WalletController(API, getWallet, saveWallet, getWalletId);

API.listen(PORT);