import { tautology } from '../../../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { js_node_call_expression_if_name_equal } from '../../../if/name/equal.mjs';
import { js_node_is_call_expression } from '../../../../../is/call/expression.mjs';
import { js_node_property_expression } from '../../../../../property/expression.mjs';
import { object_property_get } from '../../../../../../../object/property/get.mjs';
import { js_node_is_expression_statement } from '../../../../../is/expression/statement.mjs';
export function js_node_call_expression_statement_if_name_equal(statement, name_expected, on_name_equal) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    if (js_node_is_expression_statement(statement)) {
        let expression = object_property_get(statement, js_node_property_expression());
        if (js_node_is_call_expression(expression)) {
            js_node_call_expression_if_name_equal(expression, name_expected, on_name_equal);
        }
    }
}