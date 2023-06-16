import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_is } from '../is.mjs';
export function task_requires_get(task) {
    arguments_assert(arguments, [task_is]);
    let body = object_property_get(task, task_property_body());
    if (null_is(body)) {
        return body;
    }
    let body_parsed = json_from(body);
    let requires = task_body_requires(body_parsed);
    return requires;
}