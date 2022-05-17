import http from "./httpServices";
import config from "../config.json";

const endPoint = config.API + "/staff";

export async function topicRequests(staffId) {
  return await http.get(endPoint + `/requests/${staffId}`);
}

export async function acceptTopicRequest(id) {
  return await http.put(endPoint + `/requests/accept/${id}`);
}

export async function declineTopicRequest(id) {
  return await http.put(endPoint + `/requests/decline/${id}`);
}

export async function acceptedRequests(staffId) {
  return await http.get(endPoint + `/topics/${staffId}`);
}

export async function getSubmissions(groupId) {
  return await http.get(endPoint + `/submissions/${groupId}`);
}

export async function getMarkingRubricks() {
  return await http.get(endPoint + `/markings`);
}

export async function insertMarks(id, mark) {
  console.log(mark);
  return await http.post(endPoint + `/insertmarks/${id}`, mark);
}

export async function getCriteriaList(id) {
  return await http.get(endPoint + `/markings/${id}`);
}
