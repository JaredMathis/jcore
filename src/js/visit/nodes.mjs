import { metadata } from '../../metadata.mjs';
import { js_node_is } from '../node/is.mjs';
import { js_visit } from '../visit.mjs';
export function js_visit_nodes(parsed, predicate, lambda) {
    js_visit(parsed, node => {
        return js_node_is(node) && predicate(node);
    }, lambda);
    metadata([]);
}