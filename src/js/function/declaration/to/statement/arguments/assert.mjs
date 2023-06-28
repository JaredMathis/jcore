import { boolean_value_true } from '../../../../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../../../../boolean/value/false.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { not } from '../../../../../../not.mjs';
import { js_function_delcaration_to_statement_first } from '../../../../delcaration/to/statement/first.mjs';
import { refactor_arguments_assert_add_no_check } from '../../../../../../refactor/arguments/assert/add/no/check.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes } from '../../../../../../refactor/functions/arguments/assert/missing/add/excludes.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { js_node_call_expression_statement_if_name_equal } from '../../../../../node/call/expression/statement/if/name/equal.mjs';
import { list_first } from '../../../../../../list/first.mjs';
import { list_empty } from '../../../../../../list/empty.mjs';
import { js_function_declaration_to_statements } from '../../statements.mjs';

async function js_function_declaration_to_statement_arguments_assert_added(function_declaration) {
    let statements = js_function_declaration_to_statements(function_declaration);
    let exists = boolean_value_false();
    let v_5 = list_empty(statements);
    let v_3 = not(v_5);
    if (v_3) {
        let statement_first = list_first(statements);
        let v = function_name_get(arguments_assert);
        let v_6 = function on_name_equal() {
            exists = boolean_value_true();
        };
        js_node_call_expression_statement_if_name_equal(statement_first, v, v_6);
    }
    let added = not(exists);
    if (added) {
        let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
        refactor_arguments_assert_add_no_check(function_declaration, excludes);
    }
    let statement = js_function_delcaration_to_statement_first(function_declaration);
    return { statement, added };
}

export async function js_function_declaration_to_statement_arguments_assert(function_declaration) {
    let { statement } = await js_function_declaration_to_statement_arguments_assert_added(function_declaration);
    return statement;
    metadata([]);
}