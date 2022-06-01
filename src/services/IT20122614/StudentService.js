import ApiCaller from "../IT20122096/httpServices";

export async function studentCaller(data) {
  return await ApiCaller.post( "/students/register/members", data);
}
export async function requestTopicSepervisor(data) {
  return await ApiCaller.post( "/students/request/topic", data);
}
export async function makeGroupOnly(data) {
  return await ApiCaller.post( "/students/add", data);
}
export async function getSupervisor(data) {
  return await ApiCaller.get( "/students/getsupervisor", {params: { field: data.supervisor, userRole: data.userRole }},);
}
export async function registerTopicCallery(data) {
  return await ApiCaller.post( "/students/uploads", data);
}
export async function submitProposal(data) {
  return await ApiCaller.put( "/students/proposal", data);
}
export async function submitFinalThesis(data) {
  return await ApiCaller.put( "/students/thesis", data);
}
export async function submitReport(data) {
  return await ApiCaller.put( "/students/report", data);
}
export async function submitPresantation(data) {
  return await ApiCaller.put( "/students/presentation", data);
}

