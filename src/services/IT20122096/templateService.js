import http from "./httpServices";

const endPoint = "/template";

export async function uploadTemplate(data, name) {
  return await http.post(endPoint + `/${name}`, data);
}

export async function getTemplates() {
  return await http.get(endPoint);
}

export async function delteTemplates(id) {
  return await http.delete(endPoint + `/${id}`);
}
