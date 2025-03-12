import axios from "axios";

test("Create Wallet Bitcoin", async () => {
    const wallet = {
        name: "Bitcoin",
        wallet: "bc1qx8y6p5s6wrmcufwm3ccm2huhhudk9u3av992hx",
        coin: "BTC",
        contract: "",
        nameCoin: "Bitcoin"
    }
    const outputCreateData = await axios.post("http://localhost:3000/wallet", wallet);
    const outputCreate = outputCreateData.data;
    expect(!!outputCreate.id).toBe(true);
    const outputByIdData = await axios.get(`http://localhost:3000/wallet/${outputCreate.id}`);
    const outputById = outputByIdData.data;
    expect(outputById.name).toBe(wallet.name);
});

test("Create Wallet Base", async () => {
    const wallet = {
        name: "Bitcoin Base",
        wallet: "0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950",
        coin: "Base",
        contract: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
        nameCoin: "Bitcoin"
    }
    const outputCreateData = await axios.post("http://localhost:3000/wallet", wallet);
    const outputCreate = outputCreateData.data;
    expect(!!outputCreate.id).toBe(true);
    const outputByIdData = await axios.get(`http://localhost:3000/wallet/${outputCreate.id}`);
    const outputById = outputByIdData.data;
    expect(outputById.name).toBe(wallet.name);
});