import { useState } from "react";
import { startLoading, stopLoading } from "@/redux/features/loaderSlice";
import {
  setError,
  setSuccess,
  clearMessages,
} from "@/redux/features/errorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface FetchDataOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  useLoader?: boolean;
  useError?: boolean;
  loaderMessage?: string;
}

interface ErrorMessage {
  message: string;
  code?: number;
}

export function useFetchData() {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const loader = useAppSelector((state) => state.loader);
  const errors = useAppSelector((state) => state.errors);

  const fetchData = async (
    url: string,
    {
      method = "GET",
      headers = {},
      body = null,
      useLoader = true,
      useError = true,
      loaderMessage = "",
    }: FetchDataOptions = {}
  ) => {
    if (useLoader) {
      dispatch(startLoading(loaderMessage));
    }

    if (useError) {
      dispatch(clearMessages());
    }

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });
      setStatus(response.status);

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);

        if (useError) {
          dispatch(
            setSuccess({
              message: "Data fetched successfully.",
              code: 200,
            })
          );
        }
      } else if (useError) {
        const errorMsg: ErrorMessage = {
          400: {
            message: "Invalid input. Please check your data and try again.",
          },
          401: {
            message: "Unauthorized request. Please log in and try again.",
          },
          404: {
            message: "Record not found. The requested resource does not exist.",
          },
          500: {
            message: "Server error. Please try again later.",
          },
        }[response.status] || {
          message: "An unknown error occurred. Please try again.",
        };

        dispatch(setError(errorMsg));
      }
    } catch (err) {
      if (useError) {
        dispatch(
          setError({
            message:
              "Failed to fetch data. Please check your network and try again.",
            code: 0,
          })
        );
      }
    } finally {
      if (useLoader) {
        dispatch(stopLoading());
      }
    }
  };

  return { data, status, fetchData, loader, errors };
}
