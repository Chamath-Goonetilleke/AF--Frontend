import http from "./httpServices";
import config from "../config.json";

const endpoint = config.API + "/user";

export async function getUsers() {
  return await http.get(endpoint);
}
export async function getUser() {
  const id = localStorage.getItem("userId")
  return await http.get(endpoint+`/${id}`);
}
export async function getStaff(id) {
  
  return await http.get(endpoint + `/${id}`);
}


export async function addUser(data) {
  let user = {};
  if (data.userRole === "Student") {
    user = {
      userRole: data.userRole,
      userId: data.userId,
      name: data.name,
      email: data.email,
      password: data.password,
    };
  } else {
    user = {
      userRole: data.userRole,
      researchField: data.researchField,
      name: data.name,
      email: data.email,
      password: data.password,
    };
  }

  const response = await http.post(endpoint, user);
  console.log(response.data);
  return response;
}

export async function updateUser(id,data) {
  return await http.put(endpoint + `/${id}`, data);
}

export async function deleteUser(id) {
  return await http.delete(endpoint + `/${id}`);
}
