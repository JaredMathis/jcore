import { refactor_call_statement_find_replaceify } from '../../../../call/statement/find/replaceify.mjs';
import { file_js_all_map_args_if_function_args } from '../../../../../file/js/all/map/args/if/function/args.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { function_to_declaration } from '../../../../../function/to/declaration.mjs';
export async function refactor_functions_call_statement_find_previous(function_name_find) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_declaration_find = await function_to_declaration(function_name_find);
    await file_js_all_map_args_if_function_args(refactor_call_statement_find_replaceify, {
        function_name_find,
        function_declaration_find
    });
}