import { js_node_is_program } from '../node/is/program.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_node_is } from '../node/is.mjs';
import { js_visit } from '../visit.mjs';
export function js_visit_nodes(parsed, predicate, lambda) {
    arguments_assert(arguments, [
        js_node_is_program,
        tautology,
        tautology
    ]);
    js_visit(parsed, node => {
        return js_node_is(node) && predicate(node);
    }, lambda);
    metadata([]);
}