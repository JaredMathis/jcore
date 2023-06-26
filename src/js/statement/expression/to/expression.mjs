import { metadata } from '../../../../metadata.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_property_expression } from '../../../node/property/expression.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is_expression_statement } from '../../../node/is/expression/statement.mjs';
export function js_statement_expression_to_expression(statement) {
    arguments_assert(arguments, [js_node_is_expression_statement]);
    let v = js_node_property_expression();
    let expression = object_property_get(statement, v);
    return expression;
    metadata([]);
}