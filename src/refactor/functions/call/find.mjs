import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { refactor_call_find } from '../../call/find.mjs';
import { file_js_all_map_args_if_function } from '../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_merge } from '../../../object/merge.mjs';
export async function refactor_functions_call_find(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let refactor_fn = refactor_call_find;
    let args_additional = {};
    await file_js_all_map_args_if_function_args(refactor_fn, args_additional);
}

function file_js_all_map_args_if_function_args(refactor_fn, args_additional) {
    return file_js_all_map_args_if_function(args => refactor_fn(object_merge(args_additional, args)));
}
