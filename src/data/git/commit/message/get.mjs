import { object_property_get } from "../../../../object/property/get.mjs";
import { data_commit_message } from "../../../commit/message.mjs";
import { data_get } from "../../../get.mjs";
import { data_task_id } from "../../../task/id.mjs";

export function data_git_commit_message_get() {
    let data = await data_get();
    return object_property_get(data, data_commit_message());
}