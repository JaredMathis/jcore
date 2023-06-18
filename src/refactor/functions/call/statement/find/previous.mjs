import { refactor_call_statement_find_previous } from '../../../../call/statement/find/previous.mjs';
import { file_js_all_map_args_if_function_args } from '../../../../../file/js/all/map/args/if/function/args.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function refactor_functions_call_statement_find_previous() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function_args(refactor_call_statement_find_previous, {});
}