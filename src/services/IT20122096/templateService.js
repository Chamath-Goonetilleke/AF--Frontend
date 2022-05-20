import http from "./httpServices";
import config from "../../config.json";

const endPoint = config.API + "/template";

export async function uploadTemplate(data,name) {
  return await http.post(endPoint+`/${name}`, data);
}

export async function getTemplates() {
  return await http.get(endPoint);
}

export async function delteTemplates(id) {
  return await http.delete(endPoint + `/${id}`);
}