import { metadata } from '../../../../../metadata.mjs';
import { refactor_call_statement_find_replaceify } from '../../../../call/statement/find/replaceify.mjs';
import { function_names_each_map_args } from '../../../../../function/names/each/map/args.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { function_name_to_declaration } from '../../../../../function/name/to/declaration.mjs';
export async function refactor_functions_call_statement_find_replace(function_name_find) {
    arguments_assert(arguments, [js_identifier_is]);
    let function_declaration_find = await function_name_to_declaration(function_name_find);
    let v = {
        function_name_find,
        function_declaration_find
    };
    await function_names_each_map_args(refactor_call_statement_find_replaceify, v);
    metadata([]);
}