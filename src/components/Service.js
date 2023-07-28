import axiosInstance from "../shared/api/index";

export async function getTestData(formData) {
  try{
  const response = await axiosInstance.postWithRetries(
    `http://localhost:6001/testdata`,
    formData
  );
  return response.data.response;
  }
  catch(ex){
    return ex;
  }
}

export async function postTestData(formData) {
  const response = await axiosInstance.postWithRetries(
    `http://localhost:6001/testdata`,
    formData
  );
  return response.data.messages;
}
