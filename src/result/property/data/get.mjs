import { metadata } from '../../../metadata.mjs';
import { result_property_data } from '../data.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function result_property_data_get(result) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = result_property_data();
    let data = object_property_get(result, v);
    return data;
    metadata([]);
}