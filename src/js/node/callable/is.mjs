import { or } from '../../../or.mjs';
import { js_node_is } from '../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_is_function_declaration } from '../is/function/declaration.mjs';
import { js_node_is_arrow_function_expression } from '../is/arrow/function/expression.mjs';
export function js_node_callable_is(node) {
    arguments_assert(arguments, [js_node_is]);
    let v = js_node_is_arrow_function_expression(node);
    let v_2 = js_node_is_function_declaration(node);
    let v_3 = or(v, v_2);
    return v_3;
    metadata([]);
}