export default class Rede {
    private value: string;

    constructor (rede: string) {
        const redes = ["base", "btc", "eth"];
        if (!redes.includes(rede.toLowerCase())) throw new Error(`We do not work with the ${rede} network`);
        this.value = rede;
    }

    public getValue(): string {
        return this.value;
    }
}