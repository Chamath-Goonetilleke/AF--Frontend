import http from "./httpServices";

const endPoint = "/marking";

export async function createMarkingRubrik(name) {
  const response = await http.post(endPoint, { name: name });
  return response;
}

export async function getAllMarkings() {
  return await http.get(endPoint);
}
export async function getMarkingById(id) {
  return await http.get(endPoint + `/${id}`);
}
export async function deleteMarking(id) {
  return await http.delete(endPoint + `/${id}`);
}
