import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { refactor_call_name } from '../../refactor/call/name.mjs';
import { function_name_get } from '../name/get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
export async function function_call_name(function_name, name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        arguments_assert_todo
    ]);
    await function_map_with_args(function_name_get(refactor_call_name), function_name, { name_new });
}