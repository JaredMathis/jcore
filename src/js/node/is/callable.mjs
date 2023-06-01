import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_is_function_declaration } from './function/declaration.mjs';
import { js_node_is_arrow_function_expression } from './arrow/function/expression.mjs';
export function js_node_is_callable(node) {
    arguments_assert(arguments, [tautology]);
    return js_node_is_arrow_function_expression(node) || js_node_is_function_declaration(node);
    metadata([]);
}