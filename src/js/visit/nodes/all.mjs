import { js_node_is_program } from '../../node/is/program.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { tautology } from '../../../tautology.mjs';
import { js_visit_nodes } from '../nodes.mjs';
export function js_visit_nodes_all(parsed, lambda) {
    arguments_assert(arguments, [
        js_node_is_program,
        tautology
    ]);
    js_visit_nodes(parsed, tautology, lambda);
    metadata([]);
}