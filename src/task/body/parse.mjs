import { json_from } from '../../json/from.mjs';
import { null_is } from '../../null/is.mjs';
import { task_property_body } from '../property/body.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_is } from '../is.mjs';
export function task_body_parse(task) {
    arguments_assert(arguments, [task_is]);
    let body = object_property_get(task, task_property_body());
    if (null_is(body)) {
        return body;
    }
    console.log({body})
    let body_parsed = json_from(body);
    return body_parsed;
}