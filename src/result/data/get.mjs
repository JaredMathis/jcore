import { result_property_data } from '../property/data.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function result_data_get(result) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let data = object_property_set(result, result_property_data());
    return data;
}