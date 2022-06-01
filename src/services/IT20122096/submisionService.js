import http from "./httpServices";

const endPoint = "/submision";

export async function createSubmision(name) {
  return await http.post(endPoint, { name: name });
}
export async function getSubmisions() {
  return await http.get(endPoint);
}
