import axios from "axios"

test("Ethereum USD", async () => {
    const data = {
        name: "Ethereum",
        wallet: "0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950",
        rede: "ETH",
        contract: "",
        reference: 1e18,
        crypto: "ethereum",
        currency: "USD"
    }
    const outputPostData = await axios.post("http://localhost:3000/wallet", data);
    const outputPost = outputPostData.data;
    const outputGetData = await axios.get(`http://localhost:3000/wallet/${outputPost.id}`);
    const outputGet = outputGetData.data;
    expect(outputGet.name).toBe(data.name);
});

test("Ethereum USD", async () => {
    const data = {
        name: "Ethereum",
        wallet: "0x31B3beBFd2e7e4a0328f1E7137CaF41b86D81950",
        rede: "ETH",
        contract: "",
        reference: 1e18,
        crypto: "ethereum",
        currency: "EUR"
    }
    const outputPostData = await axios.post("http://localhost:3000/wallet", data);
    const outputPost = outputPostData.data;
    const outputGetData = await axios.get(`http://localhost:3000/wallet/${outputPost.id}`);
    const outputGet = outputGetData.data;
    expect(outputGet.name).toBe(data.name);
});

