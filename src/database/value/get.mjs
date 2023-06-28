import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { database_property_value } from '../property/value.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function database_value_get(commit_data) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = database_property_value();
    let v_2 = object_property_get(commit_data, v);
    return v_2;
    metadata([]);
}