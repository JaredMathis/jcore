import { file_js_all_map_args_if_function_args } from '../../../file/js/all/map/args/if/function/args.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { refactor_call_find } from '../../call/find.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_functions_call_find(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let refactor_fn = refactor_call_find;
    let args_additional = {};
    await file_js_all_map_args_if_function_args(refactor_fn, args_additional);
}