import http from "./httpServices";
import config from "../config.json";

const endPoint = config.API + "/criteria";

export async function createCriteria(data) {
  return await http.post(endPoint, data);
}
