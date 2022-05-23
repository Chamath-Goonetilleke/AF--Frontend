import http from "../IT20122096/httpServices";
import config from "../../config.json";

const endPoint = config.API + "/chat";

export async function getChats(id) {
  return http.get(endPoint + `/${id}`);
}

export async function sendMessage(id, chat) {
  return http.post(endPoint + `/${id}`, chat);
}
