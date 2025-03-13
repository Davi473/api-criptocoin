import axios from "axios"

export default abstract class HttpClient {
    public static async fetchFromServer (method: string, url: string, data?: any): Promise<any> {
        throw new Error("Method not implemented.")
    }
}

export class HttpClientAxios extends HttpClient {
    public static async fetchFromServer(method: string, url: string, data?: any): Promise<any> {
        const response = await axios({method, url, data});
        return response;
    }
}