import axios from "axios";

export default class BitcoinService {
    public async getBitcoinBalance(address: string) {
        try {
            const response = await axios.get(`https://blockchain.info/rawaddr/${address}`);
            const balance = response.data.final_balance;
            return balance;
        } catch (e: any) {
            throw new Error(`Erro ao buscar saldo de Bitcoin: ${e.message}`);
        }
    }
}