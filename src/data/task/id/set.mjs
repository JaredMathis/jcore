import { data_get } from "../../get.mjs";
import { data_task_id } from "../id.mjs";
import { object_property_set } from "../../../object/property/set.mjs";

export async function data_task_id_set(task_id) {
    let data = await data_get();
    object_property_set(data, data_task_id(), task_id);
}