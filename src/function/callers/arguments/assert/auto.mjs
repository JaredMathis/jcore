import { metadata } from '../../../../metadata.mjs';
import { function_callers_names } from '../../names.mjs';
import { function_callers_arguments_assert_auto_generic } from './auto/generic.mjs';
import { function_to_statement_arguments_assert_args_predicate } from '../../../to/statement/arguments/assert/args/predicate.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
export async function function_callers_arguments_assert_auto(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let result = [];
    let arguments_assert_args = await function_to_statement_arguments_assert_args_predicate(function_name);
    let callers = await function_callers_names(function_name);
    for (let c_function_name of callers) {
        await function_callers_arguments_assert_auto_generic(c_function_name, function_name, arguments_assert_args, result);
    }
    return result;
    metadata([]);
}