import axios from "axios";

axios.interceptors.response.use(null, (err) => {
  const notFound = err.response && err.response.status === 404;
  const expectedError =
    err.response &&
    notFound &&
    err.response.status >= 400 &&
    err.response.status < 500;
  if (notFound) {
    window.alert("Not found");
  }
  if (!expectedError) {
    window.alert("An Unexpected error occured.");
  }
  return Promise.reject(err);
});
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
export default http;
