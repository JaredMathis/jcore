import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_visit_nodes } from '../nodes.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
export function js_visit_nodes_identifier(parsed, lambda) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    js_visit_nodes(parsed, node => js_node_is_identifier(node), lambda);
    metadata([]);
}