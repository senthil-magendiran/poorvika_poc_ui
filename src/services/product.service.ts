import axios, { AxiosError } from "axios";
import { parseAPIError } from "utils/constants";
import { BaseService } from "./base.service";
import { IAPIResponse } from "./interfaces/common.interface";

export class ProductService extends BaseService {

  public async getCategory(): Promise<IAPIResponse> {
    try {
      const { data } = await this.httpClient.get("/products/category");
      return data;
    } catch (error) {
      return parseAPIError(error as AxiosError);
    }
  }

  public async getBrand(category: string): Promise<IAPIResponse> {
    try {
      const { data } = await this.httpClient.get(`/products/brand?category=${category}`);
      return data;
    } catch (error) {
      return parseAPIError(error as AxiosError);
    }
  }

  public async getProductList(category: string, brand: string): Promise<IAPIResponse> {
    try {
      const { data } = await this.httpClient.get(`/products/list?category=${category}&brand=${brand}`);
      return data;
    } catch (error) {
      return parseAPIError(error as AxiosError);
    }
  }

  public async getGeoInfo(): Promise<IAPIResponse> {
    try {
      const { data } = await this.ipClient.get('');
      return data;
    } catch (error) {
      return parseAPIError(error as AxiosError);
    }
  }

}
