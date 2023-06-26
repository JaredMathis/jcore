import { defined_is } from '../../../../defined/is.mjs';
import { js_node_type_logical_expression } from '../../type/logical/expression.mjs';
import { js_node_is_type } from '../type.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_is_logical_expression(value) {
    arguments_assert(arguments, [defined_is]);
    return js_node_is_type(value, js_node_type_logical_expression());
}