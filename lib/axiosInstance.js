import axios from "axios";

const getBaseURL = () => {
  const baseURL =
    process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

  if (
    process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    baseURL.includes("api.travelsglobalholidays.com")
  ) {
    console.warn(
      "NEXT_PUBLIC_API_URL is pointing at the production Travel Global Holidays API.",
    );
  }

  return baseURL;
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    if (config.method === "get") {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }

    if (process.env.NODE_ENV === "development") {
      console.log("Request:", {
        baseURL: config.baseURL,
        method: config.method?.toUpperCase(),
        url: config.url,
      });
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Response:", response.status, response.config.url);
    }

    return response;
  },
  (error) => {
    if (process.env.NODE_ENV === "development") {
      console.error("Response Error:", {
        baseURL: error.config?.baseURL,
        status: error.response?.status,
        url: error.config?.url,
        method: error.config?.method,
        data: error.response?.data,
      });
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
