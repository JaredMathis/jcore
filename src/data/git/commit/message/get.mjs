import { object_property_get } from "../../../../object/property/get.mjs";
import { object_property_initialize } from "../../../../object/property/initialize.mjs";
import { data_commit_message } from "../../../commit/message.mjs";
import { data_get } from "../../../get.mjs";
import { data_task_id } from "../../../task/id.mjs";

export function data_git_commit_message_get() {
    let data = await data_get();
    const property_name = data_commit_message();
    object_property_initialize(data, property_name, '');
    return object_property_get(data, property_name);
}