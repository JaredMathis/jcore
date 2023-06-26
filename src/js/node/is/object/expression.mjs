import { defined_is } from '../../../../defined/is.mjs';
import { js_node_type_object_expression } from '../../type/object/expression.mjs';
import { js_node_is_type } from '../type.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_is_object_expression(value) {
    arguments_assert(arguments, [defined_is]);
    return js_node_is_type(value, js_node_type_object_expression());
}