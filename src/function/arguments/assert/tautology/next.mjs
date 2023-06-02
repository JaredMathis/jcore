import { js_find_identifiers } from '../../../../js/find/identifiers.mjs';
import { function_open_vs_code } from '../../../open/vs/code.mjs';
import { function_names_each } from '../../../names/each.mjs';
import { equal } from '../../../../equal.mjs';
import { js_find_call_expressions_to_name } from '../../../../js/find/call/expressions/to/name.mjs';
import { js_node_property_expression } from '../../../../js/node/property/expression.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is_expression_statement } from '../../../../js/node/is/expression/statement.mjs';
import { assert } from '../../../../assert.mjs';
import { js_export_function_single } from '../../../../js/export/function/single.mjs';
import { list_first } from '../../../../list/first.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { refactor_arguments_assert_add } from '../../../../refactor/arguments/assert/add.mjs';
import { tautology } from '../../../../tautology.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
export async function function_arguments_assert_tautology_next() {
    arguments_assert(arguments, []);
    await function_names_each(logic);
    async function logic(args) {
        let {parsed, function_name} = args;
        await refactor_arguments_assert_add(args);
        let function_declaration = js_export_function_single(parsed);
        let statements = js_function_delcaration_to_statements(function_declaration);
        let statement_first = list_first(statements);
        assert(js_node_is_expression_statement(statement_first));
        let expression = object_property_get(statement_first, js_node_property_expression());
        let name_actual = js_find_call_expressions_to_name(expression);
        assert(equal(name_actual, function_name_get(arguments_assert)));
        let matches = js_find_identifiers(expression, function_name_get(tautology));
        if (!list_length_is_0(matches)) {
            await function_open_vs_code(function_name);
            return true;
        }
    }
}