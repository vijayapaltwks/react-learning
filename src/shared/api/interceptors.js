export const requestInterceptor = (req) => {
  const request = {
    ...req,
    headers: { ...req.headers, "custom-header": "custom" },
  };
  return request;
};

export const responseInterceptor = (res) => res;
