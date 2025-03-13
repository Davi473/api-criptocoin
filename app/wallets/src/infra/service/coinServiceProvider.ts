import ICoinService, { BaseService, BitcoinService, EthereumService } from "./coinService";

interface ICoinServiceRequest {
    moeda?: string | undefined;
    rede: string;
}

export default class CoinServiceProvider {
    public provide(request: ICoinServiceRequest): ICoinService {
        switch (request.rede.toLowerCase()) {
            case "base":
                return new BaseService(request.moeda);
            case "btc":
                return new BitcoinService();
            case "eth":
                return new EthereumService();
            default:
                throw new Error("Rede não suportada");
        }
    }
}