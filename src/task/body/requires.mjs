import { object_property_get } from '../../object/property/get.mjs';
import { task_body_property_requires } from './property/requires.mjs';
import { object_property_initialize_if_unset } from '../../object/property/initialize/if/unset.mjs';
export function task_body_requires(body_parsed) {
    let v = task_body_property_requires();
    object_property_initialize_if_unset(body_parsed, v, []);
    let v_2 = task_body_property_requires();
    let requires = object_property_get(body_parsed, v_2);
    return requires;
}