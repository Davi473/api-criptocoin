import axios from "axios";

export default class EthereumService {
    public async getEthereumBalance(address: string) {
        try {
            const response = await axios.get(`https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`);
            const balance = response.data.ETH.balance;
            console.log(`Ethereum Balance: ${balance} ETH`);
            
            if (response.data.tokens) {
                console.log("Tokens ERC-20:");
                response.data.tokens.forEach((token: any) => {
                console.log(`- ${token.tokenInfo.name}: ${token.balance / 10 ** token.tokenInfo.decimals} ${token.tokenInfo.symbol}`);
                });
            }
        } catch (e: any) {
          throw new Error(`Erro ao buscar saldo de Ethereum: ${e.message}`)
        }
    }
}