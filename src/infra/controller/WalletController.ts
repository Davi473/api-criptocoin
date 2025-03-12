import HttpServer from "../../application/http/HttpServer";
import GetWallet from "../../application/usecase/Wallet/GetWallet";
import GetWalletId from "../../application/usecase/Wallet/GetWalletId";
import SaveWallet from "../../application/usecase/Wallet/SaveWallet";

export default class WalletController {
    constructor (
        readonly httpServer: HttpServer,
        readonly getWallet: GetWallet,
        readonly saveWallet: SaveWallet,
        readonly getWalletId: GetWalletId
    ) {
        this.httpServer.register("get", "/wallet", async (body: any, params: any) => {
            const output = await this.getWallet.execute();
            return output;
        });

        this.httpServer.register("post", "/wallet", async (body: any, params: any) => {
            const input = body;
            const output = await this.saveWallet.execute(input);
            return output;
        });

        this.httpServer.register("get", "/wallet/:id", async (body: any, params: any) => {
            const input = params;
            const output = await this.getWalletId.execute(input);
            return output;
        });
    }
}