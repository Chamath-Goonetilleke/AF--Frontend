import http from "./httpServices";

const endPoint = "/topicRequests";

export async function getTopicRequests() {
  return await http.get(endPoint);
}
