import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { list_find_property_or_null } from './or/null.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function list_find_property_exists(list, property_name, property_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = list_find_property_or_null(list, property_name, property_value);
    return result;
}