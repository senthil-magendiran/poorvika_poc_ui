import axios, { AxiosInstance } from 'axios'
import { BASE_URL, IP_URL } from 'utils/constants';

/* Base Service class for all services */
export class BaseService {

    httpClient: AxiosInstance = axios.create({ baseURL: BASE_URL });
    ipClient: AxiosInstance = axios.create({ baseURL: IP_URL })

}