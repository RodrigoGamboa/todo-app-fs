import axios from "axios";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Cache-Control": "no-cache",
};

const fetchConfig = {
  headers: HEADERS,
};

const createFetchMethod =
  (method: string) =>
  async (url: string, data = {}) => {
    const params = method === "GET" ? data : {};

    const requestConfig = {
      ...fetchConfig,
      method,
      url,
      params,
      data,
    };

    return await axios.request({ ...requestConfig }).then((data) => data);
  };

const Fetch = {
  get: createFetchMethod("GET"),
  post: createFetchMethod("POST"),
  put: createFetchMethod("PUT"),
  patch: createFetchMethod("PATCH"),
  delete: createFetchMethod("DELETE"),
};

export default Fetch;
