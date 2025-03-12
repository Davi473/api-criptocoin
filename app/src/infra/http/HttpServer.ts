import HttpServer from "../../application/http/HttpServer";
import express, {Request, Response} from "express";
import cors from "cors";

export default class AdaptorExpress implements HttpServer {
    readonly api: any;

    constructor () {
        this.api = express();
        this.api.use(express.json());
        this.api.use(cors());
    }

    public async register(method: string, url: string, callback: Function): Promise<void> {
        this.api[method](url, async (req: Request, res: Response) => {
            try {
                const output = await callback(req.body, req.params);
                res.json(output);
            } catch (e: any) {
                console.log(e.message);
                res.status(422).json({message: e.message});
            }
        });
    }

    public async listen(port: number | string): Promise<void> {
        this.api.listen(port, () => console.log(`Server Open: http://localhost:${port}`));
    }
}