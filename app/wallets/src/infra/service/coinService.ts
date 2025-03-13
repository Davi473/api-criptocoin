import axios from "axios";

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
            const response = await axios.get(`https://base.blockscout.com/api`, {
                params: {
                    module: "account",
                    action: "tokenbalance",
                    address,
                    tag: "latest",
                },
            });
            console.log(response.data)
            return 10
            // return Number(response.data.result);
        } catch (e: any) {
            console.log("erro")
            throw new Error(`Erro ao buscar na rede Base: ${e.message}`);
        }
    }
}

export class BitcoinService implements ICoinService {
    public async getBalance(address: string): Promise<number> {
        try {
            const response = await axios.get(`https://blockchain.info/rawaddr/${address}`);
            return response.data.final_balance;
        } catch (e: any) {
            throw new Error(`Erro ao buscar saldo de Bitcoin: ${e.message}`);
        }
    }
}

export class EthereumService implements ICoinService {
    private moeda: string;
    
    constructor(moeda: string = "") {
        this.moeda = moeda;
    }

    public async getBalance(address: string): Promise<number> {
        try {
            const response = await axios.get(`https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`);
            const balance = response.data.ETH.balance;

            console.log(`Ethereum Balance: ${balance} ETH`);
            
            if (response.data.tokens) {
                response.data.tokens.forEach((token: any) => {
                console.log(`- ${token.tokenInfo.name}: ${token.balance / 10 ** token.tokenInfo.decimals} ${token.tokenInfo.symbol}`);
                });
            }
        } catch (e: any) {
          throw new Error(`Erro ao buscar saldo de Ethereum: ${e.message}`)
        }
    }
}