import React, { useEffect, useState } from "react";
import client from "../services/client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  results: T[];
  count: number;
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      client
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then(({ data: { results } }) => {
          setData(results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });
      // .finally(() => {
      //   setLoading(false);
      // });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return {
    isLoading,
    error,
    data,
  };
};

export default useData;
