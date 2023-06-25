import { function_names_each_map_args } from '../../../function/names/each/map/args.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { refactor_call_find } from '../../call/find.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_functions_call_find(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await function_names_each_map_args(refactor_call_find, { function_name });
}