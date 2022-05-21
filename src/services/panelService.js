import config from "../config.json";
import service from "./httpService";

const url = config.API;

export async function topics() {
    return await service.get(url + "/topics");
}

export async function getTopic(data) {
    return await service.get(url + `/topics/${data}`);
}

export async function updateTopic(data) {
    return await service.get(url + `/topics/update/${data}`);
}

export async function researchgroups() {
    return await service.get(url + `/researchgroups`);
}

export async function getTopic(data) {
    return await service.get(url + `/researchgroup/${data}`);
}

export async function criteriass() {
    return await service.get(url + `/criterias`);
}

export async function saveCriterias() {
    return await service.get(url + `/criterias/save`);
}