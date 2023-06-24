import { count } from '../../count.mjs';
import { js_node_is_program } from '../node/is/program.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_node_callable_is } from '../node/callable/is.mjs';
import { js_nodes_count } from '../nodes/count.mjs';
export function js_callable_multiple(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let count = js_nodes_count(parsed, js_node_callable_is);
    return count >= 2;
    metadata([]);
}