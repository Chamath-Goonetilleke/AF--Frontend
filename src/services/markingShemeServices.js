import http from "./httpServices";
import config from "../config.json";

const endPoint = config.API + "/marking";
export async function createMarkingRubrik(name) {
  const response = await http.post(endPoint, { name: name });
  return response;
}
