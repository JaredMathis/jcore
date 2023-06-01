import { js_call_expression_to_name } from '../../../../js/call/expression/to/name.mjs';
import { js_node_property_expression } from '../../../../js/node/property/expression.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is_expression_statement } from '../../../../js/node/is/expression/statement.mjs';
import { assert } from '../../../../assert.mjs';
import { js_export_function_single } from '../../../../js/export/function/single.mjs';
import { list_first } from '../../../../list/first.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { function_parse } from '../../../parse.mjs';
import { function_name_all } from '../../../name/all.mjs';
export async function function_arguments_assert_tautology_next() {
    const all = await function_name_all();
    for (let function_name of all) {
        let parsed = function_parse(function_name);
        let function_declaration = js_export_function_single(parsed);
        let statements = js_function_delcaration_to_statements(function_declaration);
        let statement_first = list_first(statements);
        assert(js_node_is_expression_statement(statement_first));
        let expression = object_property_get(statement_first, js_node_property_expression());
        let name_actual = js_call_expression_to_name(expression);
    }
}