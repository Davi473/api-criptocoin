import { BaseService, BitcoinService, EthereumService } from "../../src/infra/service/coinService";

test("Base", async () => {
    const coin = new BaseService("0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf");
    console.log((await coin.getBalance("0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950")) / 1e6);
});

// test("Bitcoin", async () => {
//     const coin = new BitcoinService();
//     console.log(await coin.getBalance("trocar para bitcoin"));
// });

// test("Ethereum", async () => {
//     const coin = new EthereumService();
//     console.log((await coin.getBalance("0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950")) / 1e18);
// });