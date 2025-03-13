import { BaseService } from "../../src/infra/service/coinService";

test("Bitcoin", async () => {
    const coin = new BaseService();
    console.log(await coin.getBalance("0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950"));
});