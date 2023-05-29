import { data_get } from "../../get.mjs";
import { data_task_id } from "../id.mjs";
import { object_property_set } from "../../../object/property/set.mjs";
import { file_overwrite } from "../../../file/overwrite.mjs";
import { data_path } from '../../path.mjs';
import { json_to } from "../../../json/to.mjs";
import { file_json_overwrite } from "../../../file/json/overwrite.mjs";

export async function data_task_id_set(task_id) {
    let data = await data_get();
    object_property_set(data, data_task_id(), task_id);
    let file_path = data_path();
    await file_json_overwrite(data, file_path);
}

