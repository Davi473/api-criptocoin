export default class CurrencyPriceService {
    public async getCryptoPrice(crypto: string, currency: string): Promise<number> {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data[crypto][currency];
        } catch (error) {
            throw new Error(`I can't find the ${crypto} to ${currency} quote`)
        }
    }
}