import { js_node_is_expression_statement } from '../../../node/is/expression/statement.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_property_arguments } from '../../../node/property/arguments.mjs';
import { js_node_property_expression } from '../../../node/property/expression.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_statement_expression_arguments_get(s) {
    arguments_assert(arguments, [js_node_is_expression_statement]);
    let expression = object_property_get(s, js_node_property_expression());
    let expression_args = object_property_get(expression, js_node_property_arguments());
    return expression_args;
    metadata([]);
}