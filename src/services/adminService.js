import http from "./httpServices";
import config from "../config.json";

const endPoint = config.API + "/admin/groups";

export async function getGroups() {
  return await http.get(endPoint);
}
export async function addPannelMember(groupId, memeberId) {
  return await http.put(endPoint + `/addPannelMember/${groupId}`, {
    panelmember:memeberId,
  });
}
export async function getGroupMember() {
  return await http.get(endPoint + "/groupMembers");
}
export async function getGroupMemberById(id) {
  return await http.get(endPoint + `/getGroupMemberById/${id}`);
}
export async function updateGroupMember(data,id) {
  return await http.put(endPoint + `/UpdateGroupMembers/${id}`,data);
}
export async function deleteGroupMember(id) {
  return await http.delete(endPoint + `/DeleteGroupMember/${id}`);
}