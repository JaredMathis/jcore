import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { visit_recursive_ignore_duplicates } from '../recursive/ignore/duplicates.mjs';
export function visit_ignore_duplicates(node, children_get, lambda, stack) {
    let ignore_duplicates = true;
    visit_recursive_ignore_duplicates(node, children_get, lambda, stack, [], ignore_duplicates);
    metadata([metadata_generated()]);
}