import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { not } from '../../../../../not.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes } from './add/excludes.mjs';
import { refactor_arguments_assert_add_no_check } from '../../../../arguments/assert/add/no/check.mjs';
import { js_node_call_expression_statement_if_name_equal } from '../../../../../js/node/call/expression/statement/if/name/equal.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { list_empty } from '../../../../../list/empty.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_function_declaration_to_statements } from '../../../../../js/function/declaration/to/statements.mjs';
import { list_first } from '../../../../../list/first.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { refactor_import_fix } from '../../../../import/fix.mjs';
export async function refactor_functions_arguments_assert_missing_add() {
    arguments_assert(arguments, []);
    await function_names_each_map(async function logic(args) {
        let {function_declaration} = args;
        let exists = boolean_value_false();
        let statements = js_function_declaration_to_statements(function_declaration);
        let v_2 = not(list_empty(statements));
        if (v_2) {
            let statement_first = list_first(statements);
            let v = function_name_get(arguments_assert);
            js_node_call_expression_statement_if_name_equal(statement_first, v, function on_name_equal() {
                exists = boolean_value_true();
            });
        }
        let v_3 = not(exists);
        if (v_3) {
            let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
            refactor_arguments_assert_add_no_check(function_declaration, excludes);
            await refactor_import_fix(args);
        }
    });
    metadata([]);
}