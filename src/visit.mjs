import { visit_recursive } from './visit/recursive.mjs';
export function visit(root, children_get, lambda_local) {
    visit_recursive(root, children_get, lambda_local, []);
}