import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_is_type } from '../../../js/node/is/type.mjs';
export function node_is_call_expression(node) {
    arguments_assert(arguments, [tautology]);
    return js_node_is_type(node, 'CallExpression');
    metadata([]);
}