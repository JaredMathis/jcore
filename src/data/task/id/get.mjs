import { object_property_get } from "../../../object/property/get.mjs";
import { data_get } from "../../get.mjs";

export function data_task_id_get() {
    let data = await data_get();
    return object_property_get(data, data_task_id());
}