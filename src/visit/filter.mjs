import { visit_recursive } from './recursive.mjs';
export function visit_filter(root, children_get, filter, lambda) {
    visit_recursive(root, children_get, function lambda_local(node) {
        if (filter(node)) {
            lambda(node);
        }
    }, []);
}