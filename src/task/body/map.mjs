import { task_body } from '../body.mjs';
import { json_map_empty_if_null } from '../../json/map/empty/if/null.mjs';
import { task_property_body } from '../property/body.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { task_get } from '../get.mjs';
export async function task_body_map(issue_number, map) {
    let t = await task_get(issue_number);
    let task_body_value = object_property_get(t, task_property_body());
    let body_after = json_map_empty_if_null(task_body_value, map);
    let result = await task_body(issue_number, body_after);
    return result;
}