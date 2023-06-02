import { js_function_delcaration_to_statement_first } from '../../../../../function/delcaration/to/statement/first.mjs';
import { tautology } from '../../../../../../tautology.mjs';
import { refactor_arguments_assert_add_no_check } from '../../../../../../refactor/arguments/assert/add/no/check.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { js_node_call_expression_statement_if_name_equal } from '../../../../../node/call/expression/statement/if/name/equal.mjs';
import { list_first } from '../../../../../../list/first.mjs';
import { js_function_delcaration_to_statements } from '../../../../../function/delcaration/to/statements.mjs';
import { list_length_is_0 } from '../../../../../../list/length/is/0.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes } from '../../../../../../refactor/functions/arguments/assert/missing/add/excludes.mjs';
import { assert } from '../../../../../../assert.mjs';
import { js_node_is } from '../../../../../node/is.mjs';
import { js_node_is_function_declaration } from '../../../../../node/is/function/declaration.mjs';
export async function js_mapper_args_to_statement_arguments_assert(args) {
    arguments_assert(arguments, [tautology]);
    let {function_declaration} = args;
    assert(js_node_is_function_declaration(function_declaration))
    let statements = js_function_delcaration_to_statements(function_declaration);
    let exists = false;
    if (!list_length_is_0(statements)) {
        let statement_first = list_first(statements);
        js_node_call_expression_statement_if_name_equal(statement_first, function_name_get(arguments_assert), function on_name_equal() {
            exists = true;
        });
    }
    if (!exists) {
        let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
        refactor_arguments_assert_add_no_check(function_declaration, excludes);
    }
    return js_function_delcaration_to_statement_first(function_declaration);
}