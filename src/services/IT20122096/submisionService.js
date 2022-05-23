import http from "./httpServices";
import config from "../../config.json";

const endPoint = config.API + "/submision";

export async function createSubmision(name) {
  return await http.post(endPoint, {name:name});
}
export async function getSubmisions() {
  return await http.get(endPoint);
}