import EthereumService from "../../src/infra/service/EthereumService";

test("Bitcoin", async () => {
    const coin = new EthereumService();
    console.log(await coin.getEthereumBalance("0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950"));
});