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
export async function getSupervisor(data) {
  return await ApiCaller.get(url + "/students/getsupervisor", {params: { field: data.supervisor, userRole: data.userRole }},);
}
export function registerTopicCallery(data) {
  return ApiCaller.post(url + "/students/uploads", data);
}
export function submitProposal(data) {
  return ApiCaller.put(url + "/students/proposal", data);
}
export function submitFinalThesis(data) {
  return ApiCaller.put(url + "/students/thesis", data);
}
export function submitReport(data) {
  return ApiCaller.put(url + "/students/report", data);
}
export function submitPresantation(data) {
  return ApiCaller.put(url + "/students/report", data);
}

