import axios from "axios";
import { HttpClientAxios } from "../httpClient/httpClient";

export default interface ICoinService {
    getBalance(address: string): Promise<number>;
}

export class BaseService implements ICoinService {
    private moeda: string;
    
    constructor(moeda: string = "") {
        this.moeda = moeda;
    }

    public async getBalance(address: string): Promise<number> {
        try {
            const response = await HttpClientAxios.fetchFromServer("get", "https://base.blockscout.com/api", {
                params: {
                    module: "account",
                    action: "tokenbalance",
                    contractaddress: this.moeda,
                    address,
                    tag: "latest",
                },
            });
            return response.data;
        } catch (e: any) {
            throw new Error(`Erro ao buscar na rede Base: ${e.message}`);
        }
    }
}

export class BitcoinService implements ICoinService {
    public async getBalance(address: string): Promise<number> {
        try {
            const response = await HttpClientAxios.fetchFromServer("get", `https://blockchain.info/rawaddr/${address}`);
            return response.data;
        } catch (e: any) {
            throw new Error(`Erro ao buscar saldo de Bitcoin: ${e.message}`);
        }
    }
}

export class EthereumService implements ICoinService {
    public async getBalance(address: string): Promise<number> {
        try {
            const response = await HttpClientAxios.fetchFromServer("get", `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`);
            const balance = response.data.ETH.rawBalance;
            return balance;
        } catch (e: any) {
          throw new Error(`Erro ao buscar saldo de Ethereum: ${e.message}`)
        }
    }
}