import { tautology } from '../../../tautology.mjs';
import { js_visit_nodes } from '../nodes.mjs';
export function js_visit_nodes_all(parsed, lambda) {
    js_visit_nodes(parsed, tautology, lambda);
}