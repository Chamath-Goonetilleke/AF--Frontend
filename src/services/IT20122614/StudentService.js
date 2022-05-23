import config from "../../config.json";
import ApiCaller from "../IT20122096/httpServices";

const url = config.API;
export async function studentCaller(data) {
  return await ApiCaller.post(url + "/students/register/members", data);
}
export async function requestTopicSepervisor(data) {
  return await ApiCaller.post(url + "/students/request/topic", data);
}
export async function makeGroupOnly(data) {
  return await ApiCaller.post(url + "/students/add", data);
}
export async function getSupervisor(data) {
  return await ApiCaller.get(url + "/students/getsupervisor", {params: { field: data.supervisor, userRole: data.userRole }},);
}
export async function registerTopicCallery(data) {
  return await ApiCaller.post(url + "/students/uploads", data);
}
export async function submitProposal(data) {
  return await ApiCaller.put(url + "/students/proposal", data);
}
export async function submitFinalThesis(data) {
  return await ApiCaller.put(url + "/students/thesis", data);
}
export async function submitReport(data) {
  return await ApiCaller.put(url + "/students/report", data);
}
export async function submitPresantation(data) {
  return await ApiCaller.put(url + "/students/presentation", data);
}

