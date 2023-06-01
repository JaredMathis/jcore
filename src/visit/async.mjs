import { visit_recursive_async } from './recursive/async.mjs';
import { metadata } from '../metadata.mjs';
export async function visit_async(root, children_get, lambda_local) {
    await visit_recursive_async(root, children_get, lambda_local, []);
    metadata([]);
}