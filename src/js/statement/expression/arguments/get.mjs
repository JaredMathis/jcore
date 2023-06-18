import { js_statement_expression_to_expression } from '../to/expression.mjs';
import { js_node_is_expression_statement } from '../../../node/is/expression/statement.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_property_arguments } from '../../../node/property/arguments.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_statement_expression_arguments_get(s) {
    arguments_assert(arguments, [js_node_is_expression_statement]);
    let expression = js_statement_expression_to_expression(s);
    let v = js_node_property_arguments();
    let expression_args = object_property_get(expression, v);
    return expression_args;
    metadata([]);
}