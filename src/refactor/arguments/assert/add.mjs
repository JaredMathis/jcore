import { refactor_arguments_assert_add_no_check } from './add/no/check.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { js_node_call_expression_statement_if_name_equal } from '../../../js/node/call/expression/statement/if/name/equal.mjs';
import { list_first } from '../../../list/first.mjs';
import { js_function_delcaration_to_statements } from '../../../js/function/delcaration/to/statements.mjs';
import { assert } from '../../../assert.mjs';
export function refactor_arguments_assert_add(args) {
    let {function_declaration} = args;
    let statements = js_function_delcaration_to_statements(function_declaration);
    let statement_first = list_first(statements);
    let exists = false;
    js_node_call_expression_statement_if_name_equal(statement_first, function_name_get(arguments_assert), function on_name_equal() {
        exists = true;
    });
    if (!exists) {
        refactor_arguments_assert_add_no_check(function_declaration);
    }
}