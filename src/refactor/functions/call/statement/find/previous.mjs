import { refactor_call_statement_find_previous } from '../../../../call/statement/find/previous.mjs';
import { file_js_all_map_args_if_function_args } from '../../../../../file/js/all/map/args/if/function/args.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
export async function refactor_functions_call_statement_find_previous(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await file_js_all_map_args_if_function_args(refactor_call_statement_find_previous, { function_name });
}