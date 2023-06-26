import { metadata } from '../../../../../metadata.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_callers_arguments_assert_auto_generic } from './generic.mjs';
import { function_to_statement_arguments_assert_args_predicate } from '../../../../to/statement/arguments/assert/args/predicate.mjs';
export async function function_callers_arguments_assert_auto_each(function_name, c_function_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let arguments_assert_args = await function_to_statement_arguments_assert_args_predicate(function_name);
    let v = [];
    await function_callers_arguments_assert_auto_generic(c_function_name, function_name, arguments_assert_args, v);
    metadata([]);
}