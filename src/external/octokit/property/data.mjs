import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function external_octokit_property_data(response) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = 'data';
    let v = object_property_get(response, v_2);
    return v;
    metadata([]);
}