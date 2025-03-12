export default interface HttpServer {
    register (method: string, url: string, callback: Function): Promise<void>;
    listen (port: number | string): Promise<void>;
}