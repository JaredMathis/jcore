import { metadata } from './metadata.mjs';
import { visit_recursive_async } from './visit/recursive/async.mjs';
export async function visit(root, children_get, lambda_local) {
    await visit_recursive_async(root, children_get, lambda_local, []);
    metadata([]);
}