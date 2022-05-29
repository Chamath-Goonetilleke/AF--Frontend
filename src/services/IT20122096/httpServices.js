import axios from "axios";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token") || "token";
axios.interceptors.response.use(null, (err) => {
  console.log(err.response.data)
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
