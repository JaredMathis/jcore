import { metadata } from '../metadata.mjs';
import { visit_recursive } from './recursive.mjs';
export function visit_async(root, children_get, lambda_local) {
    visit_recursive(root, children_get, lambda_local, []);
    metadata([]);
}