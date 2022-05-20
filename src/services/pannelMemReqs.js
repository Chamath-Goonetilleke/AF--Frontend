import http from "./httpServices";
import config from "../config.json";

const endPoint = config.API + "/topicRequests";

export async function getTopicRequests() {
  return await http.get(endPoint);
}
