export interface IAPIResponse < T = any> {
    data?: T, 
    error?: T,
    status: string,
    message: string;
}