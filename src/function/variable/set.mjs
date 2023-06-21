import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { refactor_variable_set } from '../../refactor/variable/set.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { string_is } from '../../string/is.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_variable_set(function_name, identifier, value) {
    arguments_assert(arguments, [
        js_identifier_is,
        arguments_assert_todo,
        string_is
    ]);
    let v = function_name_get(refactor_variable_set);
    await function_map_with_args(v, function_name, {
        identifier,
        value
    });
}