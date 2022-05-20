import http from "./httpServices";
import config from "../../config.json";
import jwtDecode from "jwt-decode";

const endPoint = config.API + "/login";

export async function loginUser(data) {
  const user = { email: data.email, password: data.password };
  const response = await http.post(endPoint, user);
  localStorage.setItem("token", response.data);
  return response;
}
export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}
export function logout() {
  window.localStorage.clear();
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    const user = jwtDecode(token);
    localStorage.setItem("userId",user._id)
    return user;
  } catch (error) {
    return null;
  }
}
