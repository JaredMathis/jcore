import { refactor_call_statement_find } from '../../../call/statement/find.mjs';
import { function_names_each_map_args } from '../../../../function/names/each/map/args.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
export async function refactor_functions_call_statement_find(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    await function_names_each_map_args(refactor_call_statement_find, { function_name });
    metadata([]);
}