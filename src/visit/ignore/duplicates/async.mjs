import { metadata } from '../../../metadata.mjs';
import { visit_recursive_ignore_duplicates_async } from '../../recursive/ignore/duplicates/async.mjs';
export async function visit_ignore_duplicates_async(node, children_get, lambda) {
    let ignore_duplicates = true;
    await visit_recursive_ignore_duplicates_async(node, children_get, lambda, [], [], ignore_duplicates);
    metadata([]);
}