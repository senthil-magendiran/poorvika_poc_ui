import { AxiosError } from "axios";
import { parseAPIError } from "utils/constants";
import { BaseService } from "./base.service";
import { IAPIResponse } from "./interfaces/common.interface";
import { Iorder } from "./interfaces/Order.interface";

export class OrdersService extends BaseService {
    
    public async addOrder(orderData: Iorder): Promise<IAPIResponse> {
        try {
          const { data } = await this.httpClient.post("/orders", orderData);
          return data;
        } catch (error) {
          return parseAPIError(error as AxiosError);
        }
      } 


      public async getOrder(page: number): Promise<IAPIResponse> {
        try {
          const { data } = await this.httpClient.get(`/orders?page=${page}`);
          return data;
        } catch (error) {
          return parseAPIError(error as AxiosError);
        }
      }
}