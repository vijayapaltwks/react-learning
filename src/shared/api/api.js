import axios from "axios";
import pRetry from "p-retry";

const MAX_RETRIES = 2;

export const instance = axios.create({
  baseURL: "/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const executeAxiosRequest = async (
  axiosInstance,
  action,
  url,
  config
)=> {
  const response = await axiosInstance[action.toLowerCase()](url, config);

  return response;
};

const getWithRetries = (
  url,
  config,
  axiosInstance = instance
) =>
  pRetry(() => executeAxiosRequest(axiosInstance, "get", url, config), {
    retries: MAX_RETRIES,
    onFailedAttempt: (error) => {
      if (error.retriesLeft === 0) {
        console.error(
          error.attemptNumber,
          " failed unable to connect with server!"
        );
      }
    },
  });

const postWithRetries = (
  url,
  config,  
  axiosInstance = instance
) =>
  pRetry(() => executeAxiosRequest(axiosInstance, "post", url, config), {
    retries: MAX_RETRIES,
    onFailedAttempt: (error) => {

      if (error.retriesLeft === 0) {
        console.error(
          error.attemptNumber,
          " failed unable to connect with server!"
        );
      }
    },
  });

instance.getWithRetries = getWithRetries;
instance.postWithRetries = postWithRetries;

export default instance;
