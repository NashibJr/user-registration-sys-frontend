import axios from "axios";

const baseURL = "http://localhost:7070";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

type RequestsTypes = {
  method: string;
  url: string;
  customeHeaders?: any;
  data?: any;
};

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

const api = async <T>({
  method,
  url,
  customeHeaders = {},
  data,
}: RequestsTypes): Promise<T> => {
  try {
    const response = await axios.request<T>({
      method,
      url,
      data,
      headers: { ...headers, ...customeHeaders },
    });

    return response.data;
  } catch (error: any) {
    if (error?.response?.data) {
      return error?.response?.data;
    }
    if (error?.data) {
      return error?.data;
    }

    return error;
  }
};

export default api;
