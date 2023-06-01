import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_node_is_callable } from '../node/is/callable.mjs';
import { js_nodes_count } from '../nodes/count.mjs';
export function js_callable_multiple(parsed) {
    arguments_assert(arguments, [tautology]);
    let count = js_nodes_count(parsed, js_node_is_callable);
    return count >= 2;
    metadata([]);
}