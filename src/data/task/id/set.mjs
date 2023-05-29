import { data_get } from '../../get.mjs';
import { data_task_id } from '../id.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { data_path } from '../../path.mjs';
import { file_json_overwrite } from '../../../file/json/overwrite.mjs';
export async function data_task_id_set(task_id) {
    await data_map(map);

    function map(data) {
        object_property_set(data, data_task_id(), task_id);
    }
}


