import { refactor_variable_add_value } from '../../../refactor/variable/add/value.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_variable_add_value(function_name, identifier, identifier_value) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        arguments_assert_todo
    ]);
    let v = function_name_get(refactor_variable_add_value);
    await function_map_with_args(v, function_name, {
        identifier,
        identifier_value
    });
}