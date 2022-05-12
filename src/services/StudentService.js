import config from "../config.json";
import ApiCaller from "./httpService";

const url = config.API;
export function studentCaller(data) {
  return ApiCaller.post(url + "/students/register/members", data);
}
export function requestTopicSepervisor(data) {
  return ApiCaller.post(url + "/students/request/topic", data);
}
export function makeGroupOnly(data) {
  return ApiCaller.post(url + "/students/add", data);
}
export function getSupervisor(data) {
  return ApiCaller.get(url + "/students/getsupervisor", {params: { field: data }},);
}
