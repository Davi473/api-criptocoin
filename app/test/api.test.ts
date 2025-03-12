import axios from "axios";

test("Create Wallet Bitcoin", async () => {
    const wallet = {
        name: "Bitcoin",
        wallet: "bc1qx8y6p5s6wrmcufwm3ccm2huhhudk9u3av992hx",
        rede: "BTC",
        contract: "",
        currency: "USD",
        reference: 1e8,
        crypto: "Bitcoin"
    }
    const outputCreateData = await axios.post("http://localhost:3000/wallet", wallet);
    const outputCreate = outputCreateData.data;
    expect(!!outputCreate.id).toBe(true);
    const outputByIdData = await axios.get(`http://localhost:3000/wallet/${outputCreate.id}`);
    const outputById = outputByIdData.data;
    expect(outputById.name).toBe(wallet.name);
    expect(outputById.rede).toBe(wallet.rede);
    expect(outputById.wallet).toBe(wallet.wallet);
    expect(outputById.contract).toBe(wallet.contract);
    expect(outputById.currency).toBe(wallet.currency);
    expect(outputById.crypto).toBe(wallet.crypto);
});

test("Create Wallet Base", async () => {
    const wallet = {
        name: "Bitcoin Base",
        wallet: "0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950",
        rede: "Base",
        contract: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
        currency: "EUR",
        reference: 1e8,
        crypto: "Bitcoin"
    }
    const outputCreateData = await axios.post("http://localhost:3000/wallet", wallet);
    const outputCreate = outputCreateData.data;
    expect(!!outputCreate.id).toBe(true);
    const outputByIdData = await axios.get(`http://localhost:3000/wallet/${outputCreate.id}`);
    const outputById = outputByIdData.data;
    expect(outputById.name).toBe(wallet.name);
    expect(outputById.rede).toBe(wallet.rede);
    expect(outputById.wallet).toBe(wallet.wallet);
    expect(outputById.contract).toBe(wallet.contract);
    expect(outputById.currency).toBe(wallet.currency);
    expect(outputById.crypto).toBe(wallet.crypto);
});

test("Create Wallet Base", async () => {
    const wallet = {
        name: "Bitcoin Base",
        wallet: "0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950",
        rede: "Base",
        contract: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
        currency: "BRL",
        reference: 1e8,
        crypto: "Bitcoin"
    }
    const outputCreateData = await axios.post("http://localhost:3000/wallet", wallet);
    const outputCreate = outputCreateData.data;
    expect(!!outputCreate.id).toBe(true);
    const outputByIdData = await axios.get(`http://localhost:3000/wallet/${outputCreate.id}`);
    const outputById = outputByIdData.data;
    expect(outputById.name).toBe(wallet.name);
    expect(outputById.rede).toBe(wallet.rede);
    expect(outputById.wallet).toBe(wallet.wallet);
    expect(outputById.contract).toBe(wallet.contract);
    expect(outputById.currency).toBe(wallet.currency);
    expect(outputById.crypto).toBe(wallet.crypto);
});