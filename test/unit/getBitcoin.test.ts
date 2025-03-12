import BitcoinService from "../../src/infra/service/BitcoinService";

test("Bitcoin", async () => {
    const coin = new BitcoinService();
    console.log(await coin.getBitcoinBalance("bc1qx8y6p5s6wrmcufwm3ccm2huhhudk9u3av992hx"))
});