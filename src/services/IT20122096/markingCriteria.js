import http from "./httpServices";

const endPoint = "/criteria";

export async function createCriteria(data) {
  return await http.post(endPoint, data);
}

export async function getAllCriterias(id) {
  return await http.get(endPoint + `/${id}`);
}
