enum Calculator {
    bitcoin = 1e8,  
    ethereum = 1e18, 
    usd = 1e6        
}

export default class CalculatorCrypto {
    private value: number;

    constructor(crypto: string, quantity: number) {
        const key = crypto.toLowerCase() as keyof typeof Calculator;
        if (!(key in Calculator)) {
            throw new Error(`Criptomoeda inválida: ${crypto}`);
        }
        this.value = quantity / Calculator[key] ;
    }

    public getValue(): number {
        return this.value;
    }
}