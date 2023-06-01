import { metadata } from '../../../metadata.mjs';
import { visit_recursive_ignore_duplicates_async } from '../../recursive/ignore/duplicates/async.mjs';
export async function visit_ignore_duplicates_async(node, children_get, lambda, stack, visited) {
    let ignore_duplicates = false;
    await visit_recursive_ignore_duplicates_async(node, children_get, lambda, stack, visited, ignore_duplicates);
    metadata([]);
}