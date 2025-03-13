import ICoinService, { BaseService, BitcoinService } from "./coinService";

// Interface para a requisição do serviço
interface ICoinServiceRequest {
    moeda?: string | undefined;
    rede: string;
}

// Provider para selecionar o serviço correto
export default class CoinServiceProvider {
    public provide(request: ICoinServiceRequest): ICoinService {
        switch (request.rede.toLowerCase()) {
            case "base":
                return new BaseService(request.moeda);
            case "bitcoin":
                return new BitcoinService();
            default:
                throw new Error("Rede não suportada");
        }
    }
}