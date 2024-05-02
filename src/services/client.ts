import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  results: T[];
  count: number;
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c33677eb160d4d2f85c13379f1151748",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getData = async (requestConfig?: AxiosRequestConfig) => {
    const { data } = await axiosInstance.get<FetchResponse<T>>(this.endpoint, {
      ...requestConfig,
    });
    return data;
  };
}

export default ApiClient;
