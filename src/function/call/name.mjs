import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { refactor_first_call_name } from '../../refactor/first/call/name.mjs';
import { function_name_get } from '../name/get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
export async function function_call_name(function_name, name_new) {
    arguments_assert(arguments, [
        js_identifier_is,
        arguments_assert_todo
    ]);
    let v = function_name_get(refactor_first_call_name);
    await function_map_with_args(v, function_name, { name_new });
}