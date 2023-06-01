import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { visit_recursive_ignore_duplicates } from './ignore/duplicates.mjs';
export function visit_recursive_(node, children_get, lambda, stack, visited) {
    let ignore_duplicates = false;
    visit_recursive_ignore_duplicates(node, children_get, lambda, stack, visited, ignore_duplicates);
    metadata([metadata_generated()]);
}