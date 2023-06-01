import { visit_recursive_ignore_duplicates_async } from './ignore/duplicates/async.mjs';
import { metadata } from '../../metadata.mjs';
export async function visit_recursive_async(node, children_get, lambda, stack, visited) {
    let ignore_duplicates = false;
    await visit_recursive_ignore_duplicates_async(node, children_get, lambda, stack, visited, ignore_duplicates);
    metadata([]);
}