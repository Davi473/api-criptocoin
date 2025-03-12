import CurrencyPriceService from "../../src/infra/service/CurrencyPriceService";

test("Bitcoin", async () => {
    const coin = new CurrencyPriceService();
    console.log(await coin.getCryptoPrice("bitcoin", "usd"));
});