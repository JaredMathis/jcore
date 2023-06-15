import { object_property_data } from '../../data.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_length } from '../../../../list/length.mjs';
export function object_property_data_list_length(issues) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let data = object_property_data(issues);
    return list_length(data);
}