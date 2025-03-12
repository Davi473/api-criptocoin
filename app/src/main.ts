import "dotenv/config"
import AdaptorExpress from "./infra/http/HttpServer"
import GetWallet from "./application/usecase/Wallet/GetWallet";
import WalletRepositoryMemory from "./infra/repository/WalletRepository";
import WalletController from "./infra/controller/WalletController";
import SaveWallet from "./application/usecase/Wallet/SaveWallet";
import GetWalletId from "./application/usecase/Wallet/GetWalletId";
import BitcoinService from "./infra/service/BitcoinService";
import BaseService from "./infra/service/BaseService";
import CurrencyPriceService from "./infra/service/CurrencyPriceService";

const PORT = process.env.PORT || 3000
const API = new AdaptorExpress();

const repository = new WalletRepositoryMemory();

const bitcoinService = new BitcoinService();
const baseService = new BaseService();
const currencyPrice = new CurrencyPriceService();

const getWallet = new GetWallet(repository, baseService, bitcoinService, currencyPrice);
const saveWallet = new SaveWallet(repository);
const getWalletId = new GetWalletId(repository, baseService, bitcoinService);

new WalletController(API, getWallet, saveWallet, getWalletId);

API.listen(PORT);