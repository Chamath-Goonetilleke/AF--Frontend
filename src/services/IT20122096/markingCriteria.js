import http from "./httpServices";
import config from "../../config.json";

const endPoint = config.API + "/criteria";

export async function createCriteria(data) {
  return await http.post(endPoint, data);
}

export async function getAllCriterias(id) {
  return await http.get(endPoint+`/${id}`)
}
