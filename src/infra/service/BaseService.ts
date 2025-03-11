import axios from "axios";

export default class BaseService {
    public async getBaseBalance(address: string, moeda: string = "0xd9AA7226C4FfD24D9D6b598bD363CfBeC273355d") {
        try {
            const response = await axios.get(`https://base.blockscout.com/api`, {
              params: {
                module: "account",
                action: "tokenbalance",
                contractaddress: moeda,
                address,
                tag: "latest",
              },
            });
        
            const balance = Number(response.data.result) / 1e6; 
            console.log(`USDC Balance on Base: ${balance} USDC`);
            return balance
        } catch (e: any) {
            throw new Error(`Erro ao buscar saldo de USDC na rede Base: ${e.any}`);
        }
    }
}