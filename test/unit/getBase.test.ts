import BaseService from "../../src/infra/service/BaseService";

test("Bitcoin", async () => {
    const coin = new BaseService();
    console.log(await coin.getBaseBalance("0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950",
        "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf"
    ))
});