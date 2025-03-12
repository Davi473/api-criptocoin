import EthereumService from "../../src/infra/service/EthereumService";

test("Bitcoin", async () => {
    const coin = new EthereumService();
    console.log(await coin.getEthereumBalance(""));
});