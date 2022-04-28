import http from "./httpServices";
import config from "../config.json";

const endPoint = config.API + "/admin/groups";

export async function getGroups() {
  return await http.get(endPoint);
}
