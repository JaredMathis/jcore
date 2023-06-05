import { js_node_is } from '../../../node/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_property_expression } from '../../../node/property/expression.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is_expression_statement } from '../../../node/is/expression/statement.mjs';
import { assert } from '../../../../assert.mjs';
export function js_statement_expression_to_expression(statement_first) {
    arguments_assert(arguments, [js_node_is_expression_statement]);
    let expression = object_property_get(statement_first, js_node_property_expression());
    return expression;
}