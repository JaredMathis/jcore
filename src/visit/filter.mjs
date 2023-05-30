import { visit } from '../visit.mjs';
export function visit_filter(root, children_get, filter, lambda) {
    visit(root, children_get, lambda_local);
    function lambda_local(node) {
        if (filter(node)) {
            lambda(node);
        }
    }
}